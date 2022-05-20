import React from "react";
import {Line, ArcElement, Pie} from 'react-chartjs-2';
import Container from "./container";
//Chart.register(ArcElement);

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
	}]
};

export default function Token() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-full gap-5 mx-auto text-white bg-[#00519d] px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
      <h2>Pie Example</h2>
		<Pie
			data={data}
			width={400}
			height={400}
		/>
        
      </div>
    </Container>
  );
}
