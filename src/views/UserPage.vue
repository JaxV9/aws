<template>
  <DarkModeLayout>
    <section class="grid-container">
      <userMenu />
      <userPageContent :title="'Overview'" :firstName="firstName" :lastName="lastName">
        <div class="user-overview-container">
          <img v-if="uploadedImageUrls && uploadedImageUrls.length" :src="uploadedImageUrls[0]" alt="User Image"
            class="user-image" />
          <div class="user-overview-infos">
            <div>
              <h3>{{ firstName }} {{ lastName }}</h3>
              <p>{{ email }}</p>
            </div>
          </div>
        </div>
        <div class="adress-container">
          <h3>Your addresses:</h3>
          <div>
            <p v-for="adresse in adresses" :key="adresse">{{ adresse }}</p>
          </div>
          <button v-if="!adressFormIsDisplay" @click="toggleAdressForm()">Add an adress</button>
            <formContainer v-if="adressFormIsDisplay" :callback="createAdress">
              <formLabel :forInput="'adress'" :text="'New adress'" />
              <formField :forId="'adress'" :type="'text'" v-model:model="newAdress" />
              <formSubmitBtn :text="'Add adress'" />
            </formContainer>
        </div>
        <!-- <input type="file" @change="uploadImage" /> -->
      </userPageContent>
    </section>
  </DarkModeLayout>



</template>

<script>
import DarkModeLayout from '@/layouts/DarkModeLayout.vue';
import { inject } from 'vue';
import { get, post } from 'aws-amplify/api'
import { uploadData, list, getUrl } from 'aws-amplify/storage';
// import { Auth } from 'aws-amplify';
import userMenu from '@/components/menu/userMenu/userMenu.vue';
import userPageContent from '@/components/userPageContent/userPageContent.vue';
import formContainer from '@/components/form/formContainer.vue';
import formField from '@/components/form/formField/formField.vue';
import formLabel from '@/components/form/formLabel/formLabel.vue';
import formSubmitBtn from '@/components/form/formSubmitBtn/formSubmitBtn.vue';

export default {
  name: 'UserPage',
  components: {
    DarkModeLayout,
    userPageContent,
    userMenu,
    formContainer,
    formField,
    formLabel,
    formSubmitBtn
  },
  setup() {
    const store = inject('store');
    return {
      store
    };
  },
  data() {
    return {
      email: null,
      lastName: null,
      firstName: null,
      userId: null,
      newAdress: null,
      adressFormIsDisplay: false,
      adresses: [],
      uploadedImageUrl: null
    };
  },
  created() {
    this.getUser();
    this.getAdresses();
    this.getAllImages()
  },
  methods: {
    async getUser() {
      try {
        const restOperation = get({
          apiName: 'users',
          path: '/getCurrentUser'
        });
        const response = await restOperation.response;
        const data = await response.body.json();
        console.log(data)
        this.email = data[0].email
        this.lastName = data[0].last_name
        this.firstName = data[0].first_name
        this.userId = data[0].id
      } catch (e) {
        console.log('GET call failed: ', e);
      }
    },
    async getAdresses() {
      try {
        const restOperation = get({
          apiName: 'getAdresses',
          path: '/getAdresses'
        });
        const response = await restOperation.response;
        const data = await response.body.json();
        console.log(data);
        this.adresses = []
        data.map((element) => {
          this.adresses.push(element.name)
        })
      } catch (e) {
        console.log('GET call failed: ', e);
      }
    },
    async createAdress() {
      try {
        const restOperation = post({
          apiName: 'createAdress',
          path: '/createAdress',
          options: {
            body: {
              adress: this.newAdress
            },
          }
        });

        const { body } = await restOperation.response;
        const response = await body.json();
        console.log(response);
        this.adressFormIsDisplay = !this.adressFormIsDisplay;
        await this.getAdresses();
      } catch (e) {
        console.log('GET call failed: ', e);
      }
    },
    toggleAdressForm() {
      this.adressFormIsDisplay = !this.adressFormIsDisplay
    },
    async uploadImage(event) {
      const file = event.target.files[0];
      try {
        uploadData({
          path: ({ identityId }) => `protected/${identityId}/images/${Date.now()}-${file.name}`,
          // Alternatively, path: ({identityId}) => `protected/${identityId}/album/2024/1.jpg`
          data: file,
          options: {
            onProgress: ({ transferredBytes, totalBytes }) => {
              if (totalBytes) {
                console.log(
                  `Upload progress ${Math.round((transferredBytes / totalBytes) * 100)
                  } %`
                );
              }
            }
          }
        }).result;
        await this.getAllImages();
      } catch (error) {
        console.log('Error : ', error);
      }
    },
    async getAllImages() {
      try {
        // const credentials = await Auth.currentUserCredentials();
        // const identityId = credentials.identityId;

        const result = await list({
          path: `protected/eu-west-1:0d90d164-0792-c69f-8988-00e9df646011/images/`
        });

        const sortedItems = result.items.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));

        const imageUrls = await Promise.all(
          sortedItems.slice(0, 1).map(async (file) => {
            const urlResult = await getUrl({ path: file.path });
            return urlResult.url;
          })
        );

        this.uploadedImageUrls = imageUrls; // Assurez-vous que cette variable est définie dans data()
      } catch (error) {
        console.log('Erreur lors de la récupération des images:', error);
      }
    }
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 220px 1fr;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  margin-top: 0%;
  padding-top: 2%;
}

.user-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.user-overview-container {
  text-align: start;
  display: grid;
  grid-template-columns: 30% 70%;
}

.user-overview-infos {
  margin-top: auto;
  margin-bottom: auto;
}

.user-overview-infos {
  text-align: start;
  display: grid;
  grid-template-columns: 20% 80%;
}

.adress-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.adress-container>h3 {
  margin-bottom: 0;
}

.user-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;
}

.user-buttons h3 {
  font-size: 14px;
  color: #030303;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.user-buttons button {
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  background-color: #292929;
  color: #f4f4f4;
  text-align: left;
  transition: background 0.2s;
  cursor: pointer;
  margin: 0%;
}

.user-buttons button:hover {
  background-color: #363636;
}

.info-button {
  background-color: #1e3a8a;
  color: #fff;
}

.info-button:hover {
  background-color: #2563eb;
}

.signout-button {
  background-color: #7f1d1d;
  color: #fff;
}

.signout-button:hover {
  background-color: #dc2626;
}


.user-details {
  margin-top: 1rem;
  font-size: 15px;
  color: #030303;
  line-height: 1.6;
  text-align: center;
}

.user-details strong {
  color: #030303;
}


body.dark-mode .grid-container {
  background-color: #0d1117;
  color: #c9d1d9;
}

body.dark-mode .user-panel {
  background-color: #161b22;
  border-right: 1px solid #30363d;
}

body.dark-mode .user-buttons h3 {
  color: #8b949e;
}

body.dark-mode .user-buttons button {
  background-color: #21262d;
  color: #c9d1d9;
}

body.dark-mode .user-buttons button:hover {
  background-color: #30363d;
}

body.dark-mode .info-button {
  background-color: #1e40af;
  color: white;
}

body.dark-mode .info-button:hover {
  background-color: #2563eb;
}

body.dark-mode .signout-button {
  background-color: #7f1d1d;
  color: white;
}

body.dark-mode .signout-button:hover {
  background-color: #dc2626;
}

body.dark-mode .user-info {
  background-color: #161b22;
}

body.dark-mode .user-name,
body.dark-mode .user-role,
body.dark-mode .user-details {
  color: #c9d1d9;
}

body.dark-mode .user-details strong {
  color: #ffffff;
}
</style>