<script lang="ts">
	import { format } from 'date-fns';

	let { data } = $props();
	let { lang, global } = data;

	const translations = {
		'en-US': { pageTitle: 'Submissions' },
		'pt-BR': { pageTitle: 'Submissões' }
	};
</script>

<svelte:head>
	<title>{translations[lang].pageTitle} &ndash; EGB {format(global.startDate, 'y')}</title>
</svelte:head>

<div class="mx-auto w-full max-w-6xl px-6">
	<div class="prose mt-16">
		<h1 id="call-for-posters">Call for posters</h1>
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
				<strong>Review process</strong>: Double-blind peer review by the program committee.
				<strong>Omit author details</strong> in the submitted abstract.
			</li>
			<li><strong>Format</strong>: PDF, following the provided templates (LaTeX or Word).</li>
			<li><strong>Length</strong>: <strong>1–4 pages</strong> maximum.</li>
			<li><strong>Language</strong>: English or Portuguese (English preferred).</li>
			<li><strong>Keywords</strong>: Include <strong>up to five keywords</strong>.</li>
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
		<p><a href="https://cmt3.research.microsoft.com/EGB2023">Submit here</a></p>
		<h2 id="poster-presentation-guidelines">Poster presentation guidelines</h2>
		<p>
			Poster sessions allow authors to showcase their work and engage in discussions with attendees.
		</p>
		<h3 id="poster-design-recommendations">Poster design recommendations</h3>
		<ul>
			<li>
				<strong>Content</strong>: Focus on key findings—minimize text, emphasize
				<strong>figures, diagrams, and graphs</strong>.
			</li>
			<li><strong>Language</strong>: English (preferred) or Portuguese.</li>
			<li><strong>Title</strong>: Display at the top in <strong>CAPITAL LETTERS</strong>.</li>
			<li><strong>Authors and affiliations</strong>: Include below the title.</li>
			<li><strong>Logos</strong>: Add institutional and funding agency logos.</li>
			<li>
				<strong>Size</strong>: <strong>Width</strong>: 90 cm | <strong>Height</strong>: 90–120 cm
				(max).
			</li>
		</ul>
		<h3 id="presentation-details">Presentation details</h3>
		<ul>
			<li>Posters will be displayed <strong>throughout the event</strong>.</li>
			<li>Each poster will be assigned a numbered space.</li>
			<li>
				<strong>Certificates</strong>: Presenting authors will receive a participation certificate.
			</li>
		</ul>
		<h2 id="important-dates">Important dates</h2>
		<ul>
			<li>Submission Deadline: <strong>July 15, 2025</strong></li>
			<li>Acceptance Notification: July 18, 2025</li>
		</ul>
	</div>
</div>

<style lang="postcss">
	h1,
	h2,
	h3 {
		font-weight: 600;
	}
</style>
