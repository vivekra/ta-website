import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';
import Container from "./container";
ChartJS.register(ArcElement);

const data = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}],
	
	
};



 

export default function Token() {
  return (
	<>
	<Container className="flex flex-wrap ">
	  <div className="flex items-center w-full lg:w-1/2">
		<div className="max-w-2xl mb-8">
		  <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
			Tokenomics
		  </h1>
		  <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
		  Digitize your Credentials, Arts and Crafts, All that you need a platform with a genuine token.
		  </p>

		  <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
			<a
			  href="https://pmny.in/6IZfzubjrx7Q"
			  target="_blank"
			  rel="noopener"
			  className="px-8 py-4 text-lg font-medium text-center text-white bg-red-600 rounded-md ">
			  Buy Arima
			</a>
		 
		  </div>
		</div>
	  </div>
	  <div className="flex items-center justify-center w-full lg:w-1/2">
		<div className="">
		    <Pie
			data={data}
			width={400}
			height={400}
		/>
		</div>
	  </div>
	</Container>
	
  </>


  );
}
