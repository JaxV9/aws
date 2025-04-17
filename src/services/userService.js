import { get, post } from 'aws-amplify/api'
import { uploadData, list, getUrl } from 'aws-amplify/storage';
import { fetchAuthSession } from '@aws-amplify/auth';


class UserService {
    async getUser() {
        try {
          const restOperation = get({
            apiName: 'users',
            path: '/getCurrentUser'
          });
          const response = await restOperation.response;
          const data = await response.body.json();
          return data[0];
        } catch (e) {
          console.log('GET call failed: ', e);
        }
    }

    async getAdresses() {
      try {
        const restOperation = get({
          apiName: 'getAdresses',
          path: '/getAdresses'
        });
        const response = await restOperation.response;
        const data = await response.body.json();
        return data
      } catch (e) {
        console.log('GET call failed: ', e);
      }
    }

    async createAdress(newAdress) {
      try {
        const restOperation = post({
          apiName: 'createAdress', 
          path: '/createAdress',
          options: {
            body: {
              adress: newAdress
            },
          }
        });
        await restOperation.response;
      } catch (e) {
        console.log('GET call failed: ', e);
      }
    }

    async uploadImage(file) {
      try {
        uploadData({
          path: ({ identityId }) => `protected/${identityId}/images/${Date.now()}-${file.name}`,
          data: file,
        }).result;
      } catch (error) {
        console.log('Error : ', error);
      }
    }

    async getCurrentImage() {
      try {
        const session = await fetchAuthSession();
        const identityId = session.identityId;

        const results = await list({
          path: `protected/${identityId}/images/`
        });

        const sortedItems = results.items.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));

        const imageUrl = await Promise.all(
          sortedItems.slice(0, 1).map(async (file) => {
            const urlResult = await getUrl({ path: file.path });
            return urlResult.url;
          })
        );
        return imageUrl
      } catch (error) {
        console.log('Erreur lors de la récupération des images:', error);
      }
    }
}
export default new UserService();