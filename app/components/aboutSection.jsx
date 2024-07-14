import React from 'react';
import Image from 'next/image';
import Resume from '@/app/assets/common/resume.png';

const AboutSection = () => {
	const DataList = [
		{ id: 1, title1: 'Full Name:', title2: 'Jeleshia Biyanka Lobo' },
		{ id: 2, title1: 'Location:', title2: 'Burjuman, Dubai, UAE' },
		{ id: 3, title1: 'Nationality:', title2: 'Indian' },
		{ id: 4, title1: 'Date of Birth:', title2: '17/05/1996' },
	];
	const ContactData = [
		{ id: 1, title1: 'Phone:', title2: '+971 58 812 1153' },
		{ id: 2, title1: 'Email:', title2: 'jeleshialobo@gmail.com' },
		{ id: 3, title1: 'Linked in:', title2: '/in/jeleshiabiyankalobo' },
	];
	return (
		<div id="about" className="grid grid-cols-12 p-[80px_120px_60px] max-2xl:p-[80px_80px_60px] max-md:p-[40px_20px] gap-[40px] max-md:gap-[30px_0] items-center">
			<div className="col-span-9 max-md:col-span-full">
				<h2 className="text-white text-[32px] font-medium mb-[10px]">About</h2>
				<p className="text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-[#F5F5F5]">
					Graduated in 2017 with a Bachelor of Commerce in Accounts and Finance, I am a dedicated HR Executive/Admin with proven expertise in organizing orientations and training programs. Known for
					my approachable, diplomatic, and discerning nature, I excel in employee relations and am committed to enhancing employee retention and fostering a positive company culture. My career goal is
					to leverage my skills and knowledge in an organization that values continuous growth and professional development. I am proficient in HR and Corporate Services roles, eager to further
					develop my abilities, and contribute effectively to both organizational and personal success.
				</p>
				<div className="mt-[30px] max-md:mt-[20px] flex max-md:flex-col gap-x-[60px] max-md:gap-[10px_0]">
					<div className="flex flex-col gap-y-[20px] max-md:gap-y-[10px]">
						{DataList?.map((item) => (
							<div key={item?.id} className="flex items-end gap-[6px]">
								<p className="font-medium text-white text-[18px] max-2xl:text-[16px] max-md:text-[14px]">{item?.title1}</p>
								<p className="font-medium text-[#F5F5F5] text-[18px] max-2xl:text-[16px] max-md:text-[14px]">{item?.title2}</p>
							</div>
						))}
					</div>
					<div className="flex flex-col gap-y-[20px] max-md:gap-y-[10px]">
						{ContactData?.map((item) => (
							<div key={item?.id} className="flex items-end gap-[6px]">
								<p className="font-medium text-white text-[18px] max-2xl:text-[16px] max-md:text-[14px]">{item?.title1}</p>
								<p className="font-medium text-[#F5F5F5] text-[18px] max-2xl:text-[16px] max-md:text-[14px]">{item?.title2}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="col-span-3 max-md:col-span-full">
				<div className="shadow-2xl w-fit">
					<Image src={Resume} />
				</div>
				<div className="flex">
					<button className="ms-auto mt-[30px] max-md:mt-[20px] border-2 border-white bg-none hover:bg-white hover:text-[#379683] p-[12px_18px] max-md:p-[8px_14px] font-medium text-[18px] max-2xl:text-[16px] max-md:text-[14px]">
						Download Resume
					</button>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
