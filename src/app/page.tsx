'use client';

import Image from 'next/image';
import {useState} from 'react';

export default function Home() {
	const [expression, setExpression] = useState('');
	const [icon, setIcon] = useState('');

	const [result, setResult] = useState('');

	const handleButtonClick = (value: string) => {
		switch (value) {
			case '=':
				try {
					setResult(eval(expression));
					setIcon('../../icons/Equals.svg');
				} catch (error) {
					setResult('Error');
				}
				break;
			case 'CE':
				setExpression('');
				setResult('');
				break;
			case 'C':
				setExpression((prev) => prev.slice(0, -1));
				setResult('');
				break;
			case '%':
				const lastNumIndex = expression.search(/[^\d.]*(\d+.?\d*)$/);
				const lastNum = expression.slice(lastNumIndex);
				const percentage = (parseFloat(lastNum) / 100).toString();
				setExpression((prev) => prev.slice(0, lastNumIndex) + percentage);
				setIcon('../../icons/Percent.svg');
				break;
			case '+/-':
				const lastOperatorIndex = expression.search(/[\+\-\*\/]+[^\.]*$/);
				const lastNumIndex1 = expression.search(/[^\d.]*(\d+.?\d*)$/);
				const lastNum1 = expression.slice(lastNumIndex1);
				const sign = lastNum1.startsWith('-') ? '' : '-';
				setExpression((prev) => prev.slice(0, lastOperatorIndex + 1) + sign + lastNum1.slice(1));
				setIcon('../../icons/PlusMinus.svg');
				break;

			default:
				setExpression((prev) => prev + value);
				break;
		}
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-[#807ECE]">
			<div className="flex flex-col w-[356px] bg-[#2D2A37] pt-[54px] pb-[32px] px-[37px] rounded-[48px] gap-[26px]  shadow-body-calculator">
				<div className="w-full pl-[18px] pr-[22px] flex flex-col items-end justify-between gap-2">
					<span className="text-[#6B6B6B] text-xl"> {expression || '0'}</span>
					<div className="flex items-center justify-between w-full ">
						<Image src={icon || '../../icons/Equals.svg'} alt="Equals" width={28} height={28} />

						<span className="text-4xl text-[#EBEBEB]"> {result || '0'}</span>
					</div>
				</div>

				<div className="grid grid-cols-4 gap-3">
					<button onClick={() => handleButtonClick('CE')} className="w-16 h-16 bg-[#2D2A37] shadow-button-calculator rounded-full flex items-center justify-center ">
						<span className="text-[#975DFA] text-2xl">CE</span>
					</button>

					<button onClick={() => handleButtonClick('C')} className="w-16 h-16 bg-[#2D2A37] shadow-button-calculator rounded-full flex items-center justify-center ">
						<span className="text-2xl text-[#EBEBEB]">C</span>
					</button>

					<button onClick={() => (handleButtonClick('%'), setIcon('../../icons/Percent.svg'))} className="w-16 h-16 bg-[#2D2A37] shadow-button-calculator rounded-full flex items-center justify-center ">
						<Image src="../../icons/Percent.svg" alt="percent" width={28} height={28} />
					</button>

					<button onClick={() => (handleButtonClick('/'), setIcon('../../icons/Divide.svg'))} className="w-16 h-16 bg-[#462878] shadow-button-calculator rounded-full flex items-center justify-center ">
						<Image src="../../icons/Divide.svg" alt="Divide" width={28} height={28} />
					</button>
					<button onClick={() => handleButtonClick('7')} className="w-16 h-16 bg-[#2D2A37] shadow-button-calculator rounded-full flex items-center justify-center ">
						<span className="text-2xl text-[#EBEBEB]">7</span>
					</button>
					<button onClick={() => handleButtonClick('8')} className="w-16 h-16 bg-[#2D2A37] shadow-button-calculator rounded-full flex items-center justify-center ">
						<span className="text-2xl text-[#EBEBEB]">8</span>
					</button>
					<button onClick={() => handleButtonClick('9')} className="w-16 h-16 bg-[#2D2A37] shadow-button-calculator rounded-full flex items-center justify-center ">
						<span className="text-2xl text-[#EBEBEB]">9</span>
					</button>
					<button onClick={() => (handleButtonClick('*'), setIcon('../../icons/X.svg'))} className="w-16 h-16 bg-[#462878] shadow-button-calculator rounded-full flex items-center justify-center ">
						<Image src="../../icons/X.svg" alt="X" width={28} height={28} />
					</button>
					<button onClick={() => handleButtonClick('4')} className="w-16 h-16 bg-[#2D2A37] shadow-button-calculator rounded-full flex items-center justify-center ">
						<span className="text-2xl text-[#EBEBEB]">4</span>
					</button>
					<button onClick={() => handleButtonClick('5')} className="w-16 h-16 bg-[#2D2A37] shadow-button-calculator rounded-full flex items-center justify-center ">
						<span className="text-2xl text-[#EBEBEB]">5</span>
					</button>
					<button onClick={() => handleButtonClick('6')} className="w-16 h-16 bg-[#2D2A37] shadow-button-calculator rounded-full flex items-center justify-center ">
						<span className="text-2xl text-[#EBEBEB]">6</span>
					</button>
					<button onClick={() => (handleButtonClick('-'), setIcon('../../icons/Minus.svg'))} className="w-16 h-16 bg-[#462878] shadow-button-calculator rounded-full flex items-center justify-center ">
						<Image src="../../icons/Minus.svg" alt="Minus" width={28} height={28} />
					</button>
					<button onClick={() => handleButtonClick('1')} className="w-16 h-16 bg-[#2D2A37] shadow-button-calculator rounded-full flex items-center justify-center ">
						<span className="text-2xl text-[#EBEBEB]">1</span>
					</button>
					<button onClick={() => handleButtonClick('2')} className="w-16 h-16 bg-[#2D2A37] shadow-button-calculator rounded-full flex items-center justify-center ">
						<span className="text-2xl text-[#EBEBEB]">2</span>
					</button>
					<button onClick={() => handleButtonClick('3')} className="w-16 h-16 bg-[#2D2A37] shadow-button-calculator rounded-full flex items-center justify-center ">
						<span className="text-2xl text-[#EBEBEB]">3</span>
					</button>
					<button onClick={() => (handleButtonClick('+'), setIcon('../../icons/Plus.svg'))} className="w-16 h-16 bg-[#462878] shadow-button-calculator rounded-full flex items-center justify-center ">
						<Image src="../../icons/Plus.svg" alt="Plus" width={28} height={28} />
					</button>
					<button onClick={() => (handleButtonClick('+/-'), setIcon('../../icons/PlusMinus.svg'))} className="w-16 h-16 bg-[#2D2A37] shadow-button-calculator rounded-full flex items-center justify-center ">
						<Image src="../../icons/PlusMinus.svg" alt="PlusMinus" width={28} height={28} />
					</button>
					<button onClick={() => handleButtonClick('0')} className="w-16 h-16 bg-[#2D2A37] shadow-button-calculator rounded-full flex items-center justify-center ">
						<span className="text-2xl text-[#EBEBEB]">0</span>
					</button>
					<button onClick={() => handleButtonClick('.')} className="w-16 h-16 bg-[#2D2A37] shadow-button-calculator rounded-full flex items-center justify-center ">
						<span className="text-2xl text-[#EBEBEB]">,</span>
					</button>
					<button onClick={() => (handleButtonClick('='), setIcon('../../icons/Equals.svg'))} className="w-16 h-16 bg-[#7F45E2] shadow-button-calculator rounded-full flex items-center justify-center ">
						<Image src="../../icons/Equals.svg" alt="Equals" width={28} height={28} />
					</button>
				</div>
			</div>
		</main>
	);
}
