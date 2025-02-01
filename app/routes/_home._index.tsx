import { RiArrowLeftLine } from "@remixicon/react"
import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "ui"
import type { Route } from "./+types/_home._index"

export function meta(_: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	]
}

export default function Home() {
	return (
		<div className='flex h-svh flex-col items-center justify-center bg-background font-sans antialiased'>
			<h1 className='text-4xl'>Welcome to my React Router template 🎉</h1>
			<br />
			<h3 className='font-mono text-2xl'>With this template, you get:</h3>
			<ul className='list-disc text-left font-mono'>
				<li>React Router framework + Router dev tool</li>
				<li>Linting and format with Biome</li>
				<li>Tailwind CSS v4 + Radix</li>
				<li>Already has dark mode toggle setup</li>
			</ul>
			<br />
			<div className='my-2'>
				<h3 className='text-3xl'>Buttons</h3>
				<div className='grid grid-flow-row grid-cols-3 gap-2'>
					<Button>
						<RiArrowLeftLine />
						Default
					</Button>
					<Dialog>
						<DialogTrigger asChild>
							<Button variant='outline'>Edit Profile</Button>
						</DialogTrigger>
						<DialogContent className='sm:max-w-[425px]'>
							<DialogHeader>
								<DialogTitle>Edit profile</DialogTitle>
								<DialogDescription>
									Make changes to your profile here. Click save when you're
									done.
								</DialogDescription>
							</DialogHeader>
							<div className='grid gap-4 py-4'>
								<div className='grid grid-cols-4 items-center gap-4'>
									<label htmlFor='name' className='text-right'>
										Name
									</label>
									<input
										id='name'
										defaultValue='Pedro Duarte'
										className='col-span-3'
									/>
								</div>
								<div className='grid grid-cols-4 items-center gap-4'>
									<label htmlFor='username' className='text-right'>
										Username
									</label>
									<input
										id='username'
										defaultValue='@peduarte'
										className='col-span-3'
									/>
								</div>
							</div>
							<DialogFooter>
								<Button type='submit'>Save changes</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</div>
	)
}
