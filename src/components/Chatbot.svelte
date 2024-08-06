<script>
	import { onMount } from "svelte";


	let faqs = [
		{
			question: "What are the treatment options for cancer?",
			answer: "Treatment options vary depending on the type and stage of cancer and may include surgery, radiation therapy, chemotherapy, immunotherapy, targeted therapy, and hormone therapy."
		},
		{
			question: "What are the side effects of cancer treatment?",
			answer: "Side effects vary depending on the treatment but can include fatigue, nausea, hair loss, pain, and increased risk of infections."
		},
		{
			question: "How do I manage side effects of treatment?",
			answer: "Side effects can be managed with medications, lifestyle changes, and supportive therapies such as physical therapy and counseling."
		},
		{
			question: "What is the prognosis for my type of cancer?",
			answer: "Prognosis depends on various factors, including the type and stage of cancer, overall health, and response to treatment. Your doctor can provide more personalized information."
		},
		{
			question: "Can cancer be prevented?",
			answer: "While not all cancers can be prevented, risks can be reduced by maintaining a healthy lifestyle, avoiding tobacco, limiting alcohol, eating a balanced diet, and regular screenings."
		},
		{
			question: "What should I expect during my first visit to the clinic?",
			answer: "During your first visit, you will likely meet with a doctor to discuss your medical history, undergo a physical examination, and possibly have some initial tests done."
		},
		{
			question: "How do I prepare for cancer treatment?",
			answer: "Preparation can include undergoing pre-treatment tests, arranging transportation and support, and making lifestyle adjustments as recommended by your healthcare team."
		},
		{
			question: "What support services are available for cancer patients?",
			answer: "Support services may include counseling, support groups, nutritional advice, physical therapy, and assistance with financial and insurance matters."
		},
		{
			question: "How do I know if a clinical trial is right for me?",
			answer: "Clinical trials can offer access to new treatments. Discuss with your doctor the potential benefits and risks to determine if a clinical trial is a suitable option for you."
		},
		{
			question: "What should I bring to my appointments?",
			answer: "Bring identification, insurance information, a list of medications, medical records, and any questions or concerns you have for your doctor."
		},
		{
			question: "How can I manage pain related to cancer or its treatment?",
			answer: "Pain management can include medications, physical therapy, relaxation techniques, and complementary therapies such as acupuncture or massage."
		},
		{
			question: "What dietary changes should I make during treatment?",
			answer: "A balanced diet with adequate nutrients is important. Specific dietary recommendations will depend on your treatment and overall health, so consult with a nutritionist."
		},
		{
			question: "How do I cope with the emotional impact of cancer?",
			answer: "Emotional support can come from counseling, support groups, stress-reduction techniques, and maintaining a strong support network of family and friends."
		},
		{
			question: "What should I do if I experience severe side effects?",
			answer: "Contact your healthcare provider immediately if you experience severe or unexpected side effects. They can provide guidance and adjust your treatment plan if necessary."
		},
		{
			question: "Can I continue to work during cancer treatment?",
			answer: "Many people continue to work during treatment, but it depends on the type of work, the treatment plan, and how you feel. Discuss with your employer and healthcare team."
		},
		{
			question: "What follow-up care is needed after cancer treatment?",
			answer: "Follow-up care can include regular check-ups, monitoring for recurrence, managing any long-term side effects, and maintaining overall health."
		},
		{
			question: "How do I talk to my family and friends about my diagnosis?",
			answer: "Be honest and open about your diagnosis and treatment plan. Provide them with information and encourage them to ask questions. Support from loved ones is crucial."
		}
	];

    let activeIndex = null;
	let showAll = false;
	let showChatbot = false;

	function toggleAnswer(index) {
		activeIndex = activeIndex === index ? null : index;
	}

	function toggleShowAll() {
		showAll = !showAll;
	}

	function toggleChatbot() {
		showChatbot = !showChatbot;
	}

	onMount(() => {
		document.addEventListener('click', (e) => {
			if (!e.target.closest('.chatbot-container') && !e.target.closest('.chatbot-icon')) {
				showChatbot = false;
			}
		});
	});
</script>

<style>
	.chatbot-icon {
		position: fixed;
		bottom: 20px;
		right: 20px;
		width: 60px;
		height: 60px;
		background-color: #013365;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 24px;
		cursor: pointer;
        z-index: 10;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

	}

	.chatbot-container {
		position: fixed;
		bottom: 90px;
		right: 20px;
		width: 300px;
		max-height: 400px;
		background-color: white;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		border-radius: 8px;
		overflow-y: auto;
		padding: 20px;
        z-index: 10;
	}

	.faq {
		cursor: pointer;
		margin-bottom: 10px;
	}

	.answer {
		display: none;
		margin-left: 20px;
	}

	.answer.visible {
		display: block;
	}

	.show-all {
		cursor: pointer;
		color: #0057ae;
		text-align: center;
		margin-top: 10px;
        font-size: 1rem;
        font-weight: 600;
	}

    h3 {
        color: #000;
        font-size: 1.1rem;
    }

    h2{
        text-align: center;
        color: #1e73c9;
    }

    .chatbot-container::-webkit-scrollbar {
	width: 8px; 
}

.chatbot-container::-webkit-scrollbar-track {
	background: #f1f1f1; 
	border-radius: 10px;
}

.chatbot-container::-webkit-scrollbar-thumb {
	background: #888; 
	border-radius: 10px;
}

.chatbot-container::-webkit-scrollbar-thumb:hover {
	background: #555; 
}

</style>

<div>
	<div class="chatbot-icon" on:click={toggleChatbot}>
		&#x1F4AC;
	</div>

	{#if showChatbot}
		<div class="chatbot-container">
			<h2>FAQs</h2>
			{#each (showAll ? faqs : faqs.slice(0, 3)) as faq, index}
				<div class="faq" on:click={() => toggleAnswer(index)}>
					<h3>{index+1}. {faq.question}</h3>
					<p class:visible={activeIndex === index} class="answer">{faq.answer}</p>
				</div>
			{/each}
			<div class="show-all" on:click={toggleShowAll}>
				{showAll ? 'Show Less' : 'Show All'}
			</div>
		</div>
	{/if}
</div>