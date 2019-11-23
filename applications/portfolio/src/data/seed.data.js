import db from '../firebase/db';
import data from './data';

const seedData = () => {
	data.forEach((item, index) => {
		db.collection('images')
		.doc()
		.set(item)
		.then(() => {
			console.log(`document added: ${(index + 1)}`);
		})
		.catch((error) => {
			console.error("error adding document: ", error.message);
		})
	})
}

export default seedData;
