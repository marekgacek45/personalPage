import { notFound } from 'next/navigation'
import { Image } from 'next-sanity/image'
import Link from 'next/link'

import { GET_PROJECTS_BY_STACK, GET_STACKS_WITH_PROJECTS } from '@/sanity/lib/queries'
import { Stack, Project } from '@/sanity/lib/interface'
import { urlFor } from '@/sanity/lib/image'

import ProjectCard from '@/components/project-card'
import FilterList from '@/components/filter-list'
import LinkBtn from '@/components/link-btn'
import Hero from '@/components/hero'
import ColorSpan from '@/components/color-span'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }) {

	return {
		title: `#${params.slug} projekty`,
		description: `Zapraszam do mojego portfolio – jestem Marek Gacek, programista Full Stack z Polski. Prezentuję tu innowacyjne projekty webowe i aplikacje, które łączą moją wiedzę z zakresu front-endu i back-endu.`,
		alternates: {
			canonical: `https://marekgacekdev.pl/portfolio/${params.slug}`,
		},
		openGraph: {
			title: `#${params.slug} | Marek Gacek - Programista FullStack`,
			description: `Zapraszam do mojego portfolio – jestem Marek Gacek, programista Full Stack z Polski. Prezentuję tu innowacyjne projekty webowe i aplikacje, które łączą moją wiedzę z zakresu front-endu i back-endu.`,
			type: 'website',
			locale: 'pl_PL',
			url: `https://marekgacekdev.pl/portfolio/${params.slug}`,
			siteName: 'Marek Gacek Blog - programista FullStack',
			images: [
				{
					url: `https://marekgacekdev.pl/opengraph-image.jpg`,
					width: 1200,
					height: 630,
					alt: `Marek Gacek Blog - programista FullStack`,
				},
			],
		},
	}
}

const ProjectsByStack = async ({ params }: { params: { slug: string } }) => {
	const stacks: Stack[] = await GET_STACKS_WITH_PROJECTS()
	const projects: Project[] = await GET_PROJECTS_BY_STACK(params.slug)

	if (!stacks.find(stack => stack.slug === params.slug)) notFound()

	return (
		<>
			<Hero
				title='Portfolio'
				marqueeText={
					<>
						projekty w technologii <ColorSpan>{params.slug}</ColorSpan>
					</>
				}
			/>
			<main className='px-6 sm:px-7 pb-20'>
				{/* stacks */}

				<section className='max-w-screen-2xl mx-auto pb-16'>
					<FilterList title='Stacks'>
						<LinkBtn className='self-center mr-5' small href='/portfolio'>
							Wszystkie
						</LinkBtn>
						{stacks.map((stack, index) => (
							<Link key={`${stack.slug}-${index}`} href={`/portfolio/stack/${stack.slug}`}>
								<Image
									src={urlFor(stack.image).url()}
									alt={stack.title}
									width={120}
									height={120}
									className={`w-[40px]   ${params.slug === stack.slug ? 'scale-125' : 'hover:scale-105 duration-150'} `}
									quality={50}
								/>
							</Link>
						))}
					</FilterList>
				</section>
				{/* projects */}
				<section className=' mx-auto '>
					<div
						className='flex flex-col gap-24
					'>
						{projects.map((project, index) => (
							<ProjectCard key={`${project.title}-${index}`} project={project} />
						))}
						<Link
							href='https://github.com/marekgacek45'
							target='_blank'
							rel='norefferer nofollow'
							className='text-center'>
							<ColorSpan>zobacz więcej na moim githubie</ColorSpan>
						</Link>
					</div>
				</section>
			</main>
		</>
	)
}

export default ProjectsByStack
