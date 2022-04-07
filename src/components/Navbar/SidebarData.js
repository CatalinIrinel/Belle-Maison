import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
	{
		id: 'home',
		title: 'Acasa',
		path: 'hero',
		icon: <AiIcons.AiFillHome />,
		active: false,
	},
	{
		id: 'ab',
		title: 'Despre Noi',
		path: 'about',
		icon: <FaIcons.FaInfoCircle />,
		active: false,
	},
	{
		id: 'work',
		title: 'Portofoliu',
		path: 'portfolio',
		icon: <FaIcons.FaImages />,
		active: false,
	},
	{
		id: 'pack',
		title: 'Pachete',
		path: 'packs',
		icon: <IoIcons.IoMdPricetags />,
		active: false,
	},
	// {
	//	id: 'colab',
	// 	title: 'Colaboratori',
	// 	path: 'colabs',
	// 	icon: <IoIcons.IoIosPeople />,
	// 	active: false,
	// },
	{
		id: 'con',
		title: 'Contact',
		path: 'contact',
		icon: <FaIcons.FaPhoneVolume />,
		active: false,
	},
];
