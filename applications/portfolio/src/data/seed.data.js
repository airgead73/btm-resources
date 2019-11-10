import db from '../firebase/db';
import data from './data';

const seedData = () => {
	data.forEach((item) => {
		db.collection('images')
		.doc()
		.set(item)
		.then(() => {
			console.log('document added');
		})
		.catch((error) => {
			console.error("error adding document: ", error.message);
		})
	})
}

export default seedData;
