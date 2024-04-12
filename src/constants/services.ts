import { type ServiceCardProps } from '@/components';

// Update the grid classNames in Services section if number of services change.
export const services: Omit<ServiceCardProps, 'serialNo' | 'mousePos'>[] = [
	{
		title: 'Personal Branding',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic unde magnam, quo totam laborum quasi, distinctio debitis id voluptates,',
		dialog: {
			markdownContent: `
			<p>
			Today, you can begin to create a winning personal brand or you will continue to be jealous with the success and recognition of others. Treat your personal brand like your secondary business backing up the primary one.
			</p>
      <br />
			<p>
				We give clients the insights they need to succeed and remain distinctive. Our research and expertise in brand management allow us to advise Coaches, Consultants and online service providers on positioning their brand in various industries and markets.
			</p>
			<br>
			<strong class='text-lg'>There is a cost to your inaction: </strong>
			<ul class="pl-snug list-disc">
				<li>A never ending frustration of finding leads.</li>
				<li>No authority or dominance in your niche.</li>
				<li>No Sales system setup in place.</li>
			</ul>
			<br>
			<strong>Take Action now or remain unrecognisable. </strong>
			<br>
			<strong>Sub Services:</strong>
			<ul class="pl-snug list-disc">
				<li>Profile optimisation</li>
  			<li>Developing Unique Brand Aura</li>
  			<li>Establishing your target audience</li>
  			<li>Competition Analysis</li>
			</ul>
				`,
			stat: {
				title: '',
				value: 12
			}
		}
	},
	{
		title: 'Content Creation',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, tempora animi, cum nihil, esse ut aperiam veritatis consectetur exerci',
		dialog: {
			markdownContent: `
			<p>
    	  This is where our mastery resides. We create Exclusive content across
    	  platforms so you can build your audience and increase your authority at
    	  scale. From ideas to editing and production we handle it all
    	</p>
			<br>
    	<p>
    	  From concise, attention-grabbing videos tailored for Instagram and TikTok
    	  to insightful, authoritative content crafted for LinkedIn, we know the
    	  content game inside out across platforms.
    	</p>
			<br>
    	<p>
    	  "So, why struggle with creating content while running your business full
    	  time?ˮ Let our team of personal brand specialists handle it all. We manage
    	  the process from start to finish, freeing up your time while we elevate
    	  your brand and make you money.
    	</p>
			<br>
			<strong class='text-lg'>Sub services:</strong>
    	<ul class="pl-snug list-disc">
    	  <li>Niche specific content</li>
    	  <li>Content Calendar</li>
    	  <li>Ideation, Scripting, Graphics and research</li>
    	  <li>Ghostwriting and copywriting</li>
    	</ul>`,
			stat: {
				title: '',
				value: 12
			}
		}
	},
	{
		title: 'Video Editing',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel, error dicta voluptatibus voluptas labore reiciendis excepturi se',
		dialog: {
			markdownContent: `  <p>
      A perfect online brand grabs attention, retain the audience and make them
      buy your stuffs. And all this is done through compelling storytelling,
      accurate hooks, highly conventional edits and a precise CTA (call to
      action)
    </p>
		<br>
    <p>
      Sounds like your thing? It sure is! We provide the wholesome video editing
      services tailored to your style, niche and requirements to blow up your
      personal brand.
    </p>
		<br>
    <p>
      Your Social Growth is guaranteed within 90-days of joining our team or we
      work for free until you achieve your goal. 
    </p>
		<br>
    <p>Sounds risk good? Books a call and let's get started</p>
    <br>
    <strong class='text-lg'>Sub services:</strong>
    <ul class="pl-snug list-disc">
      <li>Long-form into short-form (30 shorts/month)</li>
      <li>Animations, B-rolls, motion graphics etc.</li>
      <li>Scripts, Hooks and CTA (call to action)</li>
      <li>UGC (User-Generated Content)</li>
    </ul>`,
			stat: {
				title: '',
				value: 12
			}
		}
	},
	{
		title: 'Consultation',
		description:
			' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempore quaerat harum ex quod alias voluptatibus accusantium ab itaque n',
		dialog: {
			markdownContent: `<p>
      Armed with cutting-edge tools and expert knowledge, we'll equip you with
      everything you need to execute a perfect personal branding strategy.
    </p>
		<br>
    <p>
      Includes: competitor analysis, target audience research, content pillars
      as they relate to your customer journey, content calendars and planning,
      advised growth tactics, keyword and hashtag strategy, and more
    </p>
		<br>
    <p>
      Rest assured! With our proven track record, you can trust us to deliver
      remarkable ROI every step of the way. We'll grow your audience on social
      media, build thousands of fans and get them to buy your stuff.
    </p>
		<br>
    <strong class='text-lg'>Sub services:</strong>
    <ul class="pl-4 list-disc">
			<li><strong>Social Media Content Strategy</strong></li>
			<li>Brand Storytelling</li>
			<li>Revenue Growth Strategy</li>
			<li>Weekly meeting</li>
		</ul>`,
			stat: {
				title: '',
				value: 12
			}
		}
	},
	{
		title: 'Funnel Creation',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat molestiae, hic dolore accusamus fuga esse atque facere itaque est, nesci',
		dialog: {
			markdownContent: `<p>
      Ever thought how these entrepreneurs make these huge revenue with so
      little following? It's all because of the well established funnels they
      have mastered along the way that drives followers directly into their bank
      account
    </p>
		<br>
    <p>
      With our expertise on funnel creation, we will alter your content,
      stories, bio, ads, landing pages, VSL etc. with our copies and designs
      that make sure that the leads convert into paying customers
    </p>
		<br>
    <p>
      The infamous funnels we use are TOFU, MOFU and BOFU, cute right! Let's
      book a call and we will create one for you
    </p>
		<br>
    <strong class='text-lg'>Sub services:</strong>
    <ul class="pl-snug list-disc">
      <li>Content Funnel (TOFU, MOFU and BOFU)</li>
      <li>Building Communities</li>
      <li>Email marketing campaigns</li>
    </ul>`,
			stat: {
				title: '',
				value: 12
			}
		}
	},
	{
		title: 'Lead Generation',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates qui facilis assumenda error laboriosam consequatur adipisci optio?',
		dialog: {
			markdownContent: `<p>
      There is no business if there is no lead, that's a cliche we all know but
      still 95% founders fail to get leads to scale their business
    </p>
		<br>
    <p>
      We leverage your personal brand to generate organic leads through Lead
      magnets and our funnels by nurturing them. Once we have the socials of
      your prospects, we use Retargeting Ads and DM scripts to make the
      appointments.
    </p>
		<br>
    <p>
      From here you take the wheel and take the sales call and close your
      clients. And Boohah! you got credited.
    </p>
		<br>
    <strong class='text-lg'>Sub services:</strong>
    <ul class="pl-snug list-disc">
      <li>Create Lead Magnets to get emails</li>
      <li>Retargeting Ads to convert leads</li>
      <li>Automate engagement for leads</li>
      <li>DM scripts to book calls</li>
    </ul>`,
			stat: {
				title: '',
				value: 12
			}
		}
	}
];
