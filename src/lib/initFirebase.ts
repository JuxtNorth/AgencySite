import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyCQBjclNCSAFzg-PyQLGjoqB7NAZlDxil4',
	authDomain: 'test-cb9cd.firebaseapp.com',
	databaseURL:
		'https://test-cb9cd-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'test-cb9cd',
	storageBucket: 'test-cb9cd.appspot.com',
	messagingSenderId: '146598243896',
	appId: '1:146598243896:web:9577d8c64b0d1df73140cd',
	measurementId: 'G-5Y2Y0L27N2'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
