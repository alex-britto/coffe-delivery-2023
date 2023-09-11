"use client";

import router from "next/router";
import Image from "next/image";

import styled from "windstitch";
import { ShoppingCart } from "@phosphor-icons/react";

import Button from "@/components/Button";

export default function Header() {
	return (
		<Container className="">
			<Image
				src="/images/logo.png"
				alt="logo"
				width={85}
				height={40}
				quality={100}
			/>
			<Button
				baseColor="tertiary"
				icon={
					<ShoppingCart size={22} weight="fill" className="fill-yellow-dark" />
				}
				onClick={() => router.push("")}
				badgeCount={3}
			/>
		</Container>
	);
}

const Container = styled.header(
	`
		w-full 
		flex 
		py-8
		justify-between
	`
);
