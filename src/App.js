import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';

const firebaseConfig = {
	apiKey: "AIzaSyDfopRdiPlfSTSTjvS7g0ndDK6bADtjrjg",
	authDomain: "donalds-glo.firebaseapp.com",
	databaseURL: "https://donalds-glo-default-rtdb.firebaseio.com",
	projectId: "donalds-glo",
	storageBucket: "donalds-glo.appspot.com",
	messagingSenderId: "1042854072850",
	appId: "1:1042854072850:web:c358e443586e521cb3becb"
};
firebase.initializeApp(firebaseConfig);

function App() { 
	const auth = useAuth(firebase.auth); 
	const openItem = useOpenItem();
	const orders = useOrders();
	useTitle(openItem.openItem);

	return (
		<>
			<GlobalStyle/>
			<NavBar {...auth}/>
			<Order 
				{...orders} 
				{...openItem} 
				{...auth}
				firebaseDatabase={firebase.database}
				/>
			<Menu {...openItem}/>
			{ openItem.openItem && <ModalItem {...openItem} {...orders} />}
		</>
	);
}

export default App;
 