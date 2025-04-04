<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import { format } from 'date-fns';

	let { data } = $props();
	let { lang, global } = data;

	const translations = {
		'en-US': { pageTitle: 'Submissions', headerTitle: 'Call for posters' },
		'pt-BR': { pageTitle: 'Submissões', headerTitle: 'Chamada de pôsteres' }
	};
</script>

<svelte:head>
	<title>{translations[lang].pageTitle} &ndash; EGB {format(global.startDate, 'y')}</title>
</svelte:head>

<Banner
	{lang}
	title={translations[lang].pageTitle}
	imageUrl="{base}/api/assets/cada5c39-03ab-4406-b038-d679077654a0"
	class="bg-top"
/>

<div class="mx-auto mt-12 w-full max-w-6xl px-6">
	<div class="prose prose-lg">
		<h2 id="submission-guidelines">Submission guidelines</h2>
		<h3 id="eligibility">Eligibility</h3>
		<p>
			We invite authors to submit <strong>original work</strong> (completed or in progress) related
			to
			<strong>bioinformatics</strong>.
		</p>
		<ul>
			<li>
				Only <strong>poster presentations</strong> (with an accompanying abstract) will be accepted.
			</li>
			<li>All accepted abstracts will be presented in dedicated poster sessions.</li>
		</ul>
		<h3 id="submission-requirements">Submission requirements</h3>
		<ul>
			<li><strong>Originality</strong>: Submissions must be unpublished.</li>
			<li>
				<strong>Review process</strong>: Double-blind peer review by the program committee. Omit
				author details in the submitted abstract.
			</li>
			<li><strong>Format</strong>: PDF, following the provided templates (LaTeX or Word).</li>
			<li><strong>Length</strong>: 1&ndash;4 pages maximum.</li>
			<li><strong>Language</strong>: English or Portuguese (English preferred).</li>
			<li><strong>Keywords</strong>: Include up to five keywords.</li>
		</ul>
		<h3 id="templates">Templates</h3>
		<ul>
			<li>
				<a href="https://www.ufrgs.br/egb/wp-content/uploads/2019/01/Latex.zip"
					>LaTeX template (Recommended)</a
				>
			</li>
			<li>
				<a href="https://www.ufrgs.br/egb/wp-content/uploads/2019/01/Word.zip">Word template</a>
			</li>
		</ul>
		<h3 id="how-to-submit">How to submit</h3>
		<p>Upload your PDF via the submission system by the deadline:</p>
		<p><a href="https://cmt3.research.microsoft.com/EGB2023" target="_blank">Submit here</a></p>
		<h2 id="poster-presentation-guidelines">Poster presentation guidelines</h2>
		<p>
			Poster sessions allow authors to showcase their work and engage in discussions with attendees.
		</p>
		<h3 id="poster-design-recommendations">Poster design recommendations</h3>
		<ul>
			<li>
				<strong>Content</strong>: Focus on key findings—minimize text, emphasize figures, diagrams,
				and graphs.
			</li>
			<li><strong>Language</strong>: English (preferred) or Portuguese.</li>
			<li><strong>Title</strong>: Display at the top in CAPITAL LETTERS.</li>
			<li><strong>Authors and affiliations</strong>: Include below the title.</li>
			<li><strong>Logos</strong>: Add institutional and funding agency logos.</li>
			<li>
				<strong>Size</strong>: Width: 90 cm | Height: 90&ndash;120 cm (max).
			</li>
		</ul>
		<h3 id="presentation-details">Presentation details</h3>
		<ul>
			<li>Posters will be displayed <strong>throughout the event</strong>.</li>
			<li>Each poster will be assigned a numbered space.</li>
			<li>Presenting authors will receive a participation <strong>certificate</strong>.</li>
		</ul>
		<h2 id="important-dates">Important dates</h2>
		<ul>
			<li>Submission Deadline: <strong>July 15, 2025</strong></li>
			<li>Acceptance Notification: July 18, 2025</li>
		</ul>
	</div>
</div>
