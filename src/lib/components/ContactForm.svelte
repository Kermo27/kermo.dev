<script lang="ts">
	import { env } from '$env/dynamic/public';

	type Status = 'idle' | 'sending' | 'sent' | 'error';
	type FormResponse = { success: boolean; message?: string };

	const accessKey = env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? '';
	const configured = accessKey !== '';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let botcheck = $state(false);
	let status = $state<Status>('idle');

	const canSend = $derived(configured && status !== 'sending');

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!canSend) return;

		status = 'sending';

		const payload: {
			access_key: string;
			name: string;
			email: string;
			message: string;
			subject: string;
			from_name: string;
			botcheck?: true;
		} = {
			access_key: accessKey,
			name,
			email,
			message,
			subject: 'Message from kermo.dev',
			from_name: 'kermo.dev'
		};

		if (botcheck) {
			payload.botcheck = true;
		}

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(payload)
			});

			const result: FormResponse = await response.json();

			if (result.success) {
				status = 'sent';
				name = '';
				email = '';
				message = '';
				botcheck = false;
			} else {
				status = 'error';
			}
		} catch {
			status = 'error';
		}
	}
</script>

<section id="contact" class="mt-24 scroll-mt-8" aria-labelledby="contact-title">
	<h2 id="contact-title" class="font-mono text-2xl tracking-tight">Contact</h2>

	<form class="mt-8 max-w-prose space-y-5" onsubmit={handleSubmit}>
		<input
			type="checkbox"
			name="botcheck"
			class="hidden"
			tabindex="-1"
			aria-hidden="true"
			bind:checked={botcheck}
		/>

		<div>
			<label for="contact-name" class="mb-2 block font-mono text-sm text-muted">Name</label>
			<input
				id="contact-name"
				name="name"
				type="text"
				required
				autocomplete="name"
				bind:value={name}
				class="w-full border border-border bg-canvas px-3 py-2 text-fg"
			/>
		</div>

		<div>
			<label for="contact-email" class="mb-2 block font-mono text-sm text-muted">Email</label>
			<input
				id="contact-email"
				name="email"
				type="email"
				required
				autocomplete="email"
				bind:value={email}
				class="w-full border border-border bg-canvas px-3 py-2 text-fg"
			/>
		</div>

		<div>
			<label for="contact-message" class="mb-2 block font-mono text-sm text-muted">Message</label>
			<textarea
				id="contact-message"
				name="message"
				rows="6"
				required
				bind:value={message}
				class="w-full border border-border bg-canvas px-3 py-2 text-fg"></textarea>
		</div>

		<button
			type="submit"
			disabled={!canSend}
			class="border border-border px-4 py-2 font-mono hover:border-fg disabled:opacity-50"
		>
			{status === 'sending' ? 'Sending…' : 'Send'}
		</button>

		<p class="font-mono text-sm text-muted" aria-live="polite">
			{#if !configured}
				Contact form is not configured.
			{:else if status === 'sent'}
				Message sent.
			{:else if status === 'error'}
				Could not send. Try again.
			{/if}
		</p>
	</form>
</section>
