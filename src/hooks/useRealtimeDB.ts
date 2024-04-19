import { app } from '@/lib/initFirebase';
import { child, get, getDatabase, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

const getDB = (() => {
	const db = getDatabase(app);
	return () => db;
})();

export const useRealtimeDB = <T>(path: string) => {
	const [data, setData] = useState<T | null>(null);

	useEffect(() => {
		const db = getDB();
		const dbRef = ref(db);

		get(child(dbRef, path))
			.then((snapshot) => {
				if (snapshot.exists()) {
					setData(snapshot.val());
				} else {
					throw new Error(`Could not fetch data`);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, [path]);

	return data;
};
