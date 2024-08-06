<script>
    import { onMount } from 'svelte';

    let symptoms = [
        "Fatigue", "Pain", "Weight Loss", "Nausea", "Fever", "Lumps", 
        "Night Sweats", "Cough", "Shortness of Breath", "Skin Changes"
    ];

    let selectedSymptoms = [];
    let possibleCancer = null;
    let errorMessage = '';

    const cancerTypes = {
        "Fatigue,Pain,Weight Loss": {
            name: "Possible Cancer Type: Leukemia",
            info: "Leukemia symptoms can include fatigue, pain, and weight loss. Consult a healthcare provider for a definitive diagnosis.",
            prevention: "Maintain a healthy lifestyle and regular medical check-ups."
        },
        "Nausea,Fever,Lumps": {
            name: "Possible Cancer Type: Lymphoma",
            info: "Lymphoma symptoms can include nausea, fever, and lumps. Consult a healthcare provider for a definitive diagnosis.",
            prevention: "Avoid known carcinogens and maintain a healthy immune system."
        },
        "Fatigue,Pain,Nausea": {
            name: "Possible Cancer Type: Colon Cancer",
            info: "Colon cancer symptoms can include fatigue, pain, and nausea. Consult a healthcare provider for a definitive diagnosis.",
            prevention: "Regular screenings and a diet rich in fruits and vegetables."
        },
        "Night Sweats,Cough,Shortness of Breath": {
            name: "Possible Cancer Type: Lung Cancer",
            info: "Lung cancer symptoms can include night sweats, cough, and shortness of breath. Consult a healthcare provider for a definitive diagnosis.",
            prevention: "Avoid smoking and exposure to harmful pollutants."
        },
        "Skin Changes,Blood in Stool,Difficulty Swallowing": {
            name: "Possible Cancer Type: Esophageal Cancer",
            info: "Esophageal cancer symptoms can include skin changes, blood in stool, and difficulty swallowing. Consult a healthcare provider for a definitive diagnosis.",
            prevention: "Avoid tobacco, limit alcohol consumption, and maintain a healthy diet."
        },
        "Frequent Infections,Bleeding or Bruising,Persistent Indigestion": {
            name: "Possible Cancer Type: Stomach Cancer",
            info: "Stomach cancer symptoms can include frequent infections, bleeding or bruising, and persistent indigestion. Consult a healthcare provider for a definitive diagnosis.",
            prevention: "Avoid processed foods, maintain a balanced diet, and regular screenings."
        },
        "Bloating,Pelvic Pain,Headaches": {
            name: "Possible Cancer Type: Ovarian Cancer",
            info: "Ovarian cancer symptoms can include bloating, pelvic pain, and headaches. Consult a healthcare provider for a definitive diagnosis.",
            prevention: "Regular check-ups and awareness of family medical history."
        },
        "Vision Changes,Hearing Loss,Fatigue": {
            name: "Possible Cancer Type: Brain Cancer",
            info: "Brain cancer symptoms can include vision changes, hearing loss, and fatigue. Consult a healthcare provider for a definitive diagnosis.",
            prevention: "Minimize exposure to radiation and regular medical check-ups."
        },
        "Fatigue,Pain,Weight Loss": {
        name: "Possible Cancer Type: Leukemia",
        info: "Leukemia symptoms can include fatigue, pain, and weight loss. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Maintain a healthy lifestyle and regular medical check-ups."
    },
    "Nausea,Fever,Lumps": {
        name: "Possible Cancer Type: Lymphoma",
        info: "Lymphoma symptoms can include nausea, fever, and lumps. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid known carcinogens and maintain a healthy immune system."
    },
    "Fatigue,Pain,Nausea": {
        name: "Possible Cancer Type: Colon Cancer",
        info: "Colon cancer symptoms can include fatigue, pain, and nausea. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular screenings and a diet rich in fruits and vegetables."
    },
    "Night Sweats,Cough,Shortness of Breath": {
        name: "Possible Cancer Type: Lung Cancer",
        info: "Lung cancer symptoms can include night sweats, cough, and shortness of breath. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid smoking and exposure to harmful pollutants."
    },
    "Skin Changes,Blood in Stool,Difficulty Swallowing": {
        name: "Possible Cancer Type: Esophageal Cancer",
        info: "Esophageal cancer symptoms can include skin changes, blood in stool, and difficulty swallowing. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid tobacco, limit alcohol consumption, and maintain a healthy diet."
    },
    "Frequent Infections,Bleeding or Bruising,Persistent Indigestion": {
        name: "Possible Cancer Type: Stomach Cancer",
        info: "Stomach cancer symptoms can include frequent infections, bleeding or bruising, and persistent indigestion. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid processed foods, maintain a balanced diet, and regular screenings."
    },
    "Bloating,Pelvic Pain,Headaches": {
        name: "Possible Cancer Type: Ovarian Cancer",
        info: "Ovarian cancer symptoms can include bloating, pelvic pain, and headaches. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular check-ups and awareness of family medical history."
    },
    "Vision Changes,Hearing Loss,Fatigue": {
        name: "Possible Cancer Type: Brain Cancer",
        info: "Brain cancer symptoms can include vision changes, hearing loss, and fatigue. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Minimize exposure to radiation and regular medical check-ups."
    },
    // Additional combinations
    "Fatigue,Pain,Fever": {
        name: "Possible Cancer Type: Bone Cancer",
        info: "Bone cancer symptoms can include fatigue, pain, and fever. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular medical check-ups and maintaining a healthy diet."
    },
    "Weight Loss,Nausea,Headaches": {
        name: "Possible Cancer Type: Pancreatic Cancer",
        info: "Pancreatic cancer symptoms can include weight loss, nausea, and headaches. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid smoking and maintain a healthy weight."
    },
    "Fatigue,Vision Changes,Shortness of Breath": {
        name: "Possible Cancer Type: Eye Cancer",
        info: "Eye cancer symptoms can include fatigue, vision changes, and shortness of breath. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Protect eyes from UV exposure and regular eye exams."
    },
    "Pain,Lumps,Nausea": {
        name: "Possible Cancer Type: Breast Cancer",
        info: "Breast cancer symptoms can include pain, lumps, and nausea. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular self-exams and mammograms."
    },
    "Nausea,Bloating,Fever": {
        name: "Possible Cancer Type: Liver Cancer",
        info: "Liver cancer symptoms can include nausea, bloating, and fever. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid alcohol and maintain a healthy weight."
    },
    "Fatigue,Frequent Infections,Weight Loss": {
        name: "Possible Cancer Type: Blood Cancer",
        info: "Blood cancer symptoms can include fatigue, frequent infections, and weight loss. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular medical check-ups and avoiding known carcinogens."
    },
    "Skin Changes,Headaches,Nausea": {
        name: "Possible Cancer Type: Skin Cancer",
        info: "Skin cancer symptoms can include skin changes, headaches, and nausea. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid excessive sun exposure and use sunscreen."
    },
    "Pelvic Pain,Bloating,Lumps": {
        name: "Possible Cancer Type: Cervical Cancer",
        info: "Cervical cancer symptoms can include pelvic pain, bloating, and lumps. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular Pap smears and HPV vaccination."
    },
    "Night Sweats,Weight Loss,Fatigue": {
        name: "Possible Cancer Type: Thyroid Cancer",
        info: "Thyroid cancer symptoms can include night sweats, weight loss, and fatigue. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular medical check-ups and awareness of family history."
    },
    "Fatigue,Frequent Infections,Night Sweats": {
        name: "Possible Cancer Type: Hodgkin's Lymphoma",
        info: "Hodgkin's lymphoma symptoms can include fatigue, frequent infections, and night sweats. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid known carcinogens and maintain a healthy immune system."
    },
    "Cough,Shortness of Breath,Fever": {
        name: "Possible Cancer Type: Thymus Cancer",
        info: "Thymus cancer symptoms can include cough, shortness of breath, and fever. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid exposure to harmful chemicals and pollutants."
    },
    "Weight Loss,Frequent Infections,Shortness of Breath": {
        name: "Possible Cancer Type: Multiple Myeloma",
        info: "Multiple myeloma symptoms can include weight loss, frequent infections, and shortness of breath. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular medical check-ups and maintaining a healthy immune system."
    },
    "Fatigue,Pain,Lumps": {
        name: "Possible Cancer Type: Soft Tissue Sarcoma",
        info: "Soft tissue sarcoma symptoms can include fatigue, pain, and lumps. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid exposure to certain chemicals and maintain a healthy lifestyle."
    },
    "Night Sweats,Nausea,Headaches": {
        name: "Possible Cancer Type: Adrenal Cancer",
        info: "Adrenal cancer symptoms can include night sweats, nausea, and headaches. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular medical check-ups and avoiding known carcinogens."
    },
    "Frequent Infections,Persistent Indigestion,Headaches": {
        name: "Possible Cancer Type: Intestinal Cancer",
        info: "Intestinal cancer symptoms can include frequent infections, persistent indigestion, and headaches. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Maintain a healthy diet and regular screenings."
    },
    "Bloating,Frequent Infections,Fatigue": {
        name: "Possible Cancer Type: Endometrial Cancer",
        info: "Endometrial cancer symptoms can include bloating, frequent infections, and fatigue. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular check-ups and maintaining a healthy weight."
    },
    "Skin Changes,Weight Loss,Vision Changes": {
        name: "Possible Cancer Type: Melanoma",
        info: "Melanoma symptoms can include skin changes, weight loss, and vision changes. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid excessive sun exposure and use sunscreen."
    },
    "Frequent Infections,Persistent Indigestion,Weight Loss": {
        name: "Possible Cancer Type: Rectal Cancer",
        info: "Rectal cancer symptoms can include frequent infections, persistent indigestion, and weight loss. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular screenings and a diet rich in fruits and vegetables."
    },
    "Fatigue,Nausea,Headaches": {
        name: "Possible Cancer Type: Bladder Cancer",
        info: "Bladder cancer symptoms can include fatigue, nausea, and headaches. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid smoking and maintain a healthy lifestyle."
    },
    "Frequent Infections,Headaches,Shortness of Breath": {
        name: "Possible Cancer Type: Sinus Cancer",
        info: "Sinus cancer symptoms can include frequent infections, headaches, and shortness of breath. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid exposure to harmful chemicals and pollutants."
    },
    "Pelvic Pain,Weight Loss,Nausea": {
        name: "Possible Cancer Type: Uterine Cancer",
        info: "Uterine cancer symptoms can include pelvic pain, weight loss, and nausea. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular check-ups and maintaining a healthy weight."
    },
    "Cough,Night Sweats,Headaches": {
        name: "Possible Cancer Type: Mesothelioma",
        info: "Mesothelioma symptoms can include cough, night sweats, and headaches. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid exposure to asbestos and other harmful chemicals."
    },
    "Fatigue,Persistent Indigestion,Nausea": {
        name: "Possible Cancer Type: Gallbladder Cancer",
        info: "Gallbladder cancer symptoms can include fatigue, persistent indigestion, and nausea. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Maintain a healthy diet and regular medical check-ups."
    },
    "Fatigue,Frequent Infections,Cough": {
        name: "Possible Cancer Type: Pleural Cancer",
        info: "Pleural cancer symptoms can include fatigue, frequent infections, and cough. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid exposure to asbestos and other harmful chemicals."
    },
    "Skin Changes,Frequent Infections,Fever": {
        name: "Possible Cancer Type: Merkel Cell Carcinoma",
        info: "Merkel cell carcinoma symptoms can include skin changes, frequent infections, and fever. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid excessive sun exposure and use sunscreen."
    },
    "Weight Loss,Nausea,Fatigue": {
        name: "Possible Cancer Type: Small Intestine Cancer",
        info: "Small intestine cancer symptoms can include weight loss, nausea, and fatigue. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Maintain a healthy diet and regular medical check-ups."
    },
    "Fatigue,Pain,Headaches": {
        name: "Possible Cancer Type: Pituitary Cancer",
        info: "Pituitary cancer symptoms can include fatigue, pain, and headaches. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular medical check-ups and awareness of family history."
    },
    "Vision Changes,Nausea,Fatigue": {
        name: "Possible Cancer Type: Optic Nerve Glioma",
        info: "Optic nerve glioma symptoms can include vision changes, nausea, and fatigue. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular eye exams and maintaining a healthy lifestyle."
    },
    "Fatigue, Pain, Fever": {
        name: "Possible Cancer Type: Bone Cancer",
        info: "Bone cancer symptoms can include fatigue, pain, and fever. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular medical check-ups and maintaining a healthy diet."
    },
    "Weight Loss, Nausea, Headaches": {
        name: "Possible Cancer Type: Pancreatic Cancer",
        info: "Pancreatic cancer symptoms can include weight loss, nausea, and headaches. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid smoking and maintain a healthy weight."
    },
    "Fatigue, Vision Changes, Shortness of Breath": {
        name: "Possible Cancer Type: Eye Cancer",
        info: "Eye cancer symptoms can include fatigue, vision changes, and shortness of breath. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Protect eyes from UV exposure and regular eye exams."
    },
    "Pain, Lumps, Nausea": {
        name: "Possible Cancer Type: Breast Cancer",
        info: "Breast cancer symptoms can include pain, lumps, and nausea. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular self-exams and mammograms."
    },
    "Nausea, Bloating, Fever": {
        name: "Possible Cancer Type: Liver Cancer",
        info: "Liver cancer symptoms can include nausea, bloating, and fever. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid alcohol and maintain a healthy weight."
    },
    "Fatigue, Frequent Infections, Weight Loss": {
        name: "Possible Cancer Type: Blood Cancer",
        info: "Blood cancer symptoms can include fatigue, frequent infections, and weight loss. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular medical check-ups and avoiding known carcinogens."
    },
    "Skin Changes, Headaches, Nausea": {
        name: "Possible Cancer Type: Skin Cancer",
        info: "Skin cancer symptoms can include skin changes, headaches, and nausea. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid excessive sun exposure and use sunscreen."
    },
    "Pelvic Pain, Bloating, Lumps": {
        name: "Possible Cancer Type: Cervical Cancer",
        info: "Cervical cancer symptoms can include pelvic pain, bloating, and lumps. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular Pap smears and HPV vaccination."
    },
    "Night Sweats, Weight Loss, Fatigue": {
        name: "Possible Cancer Type: Thyroid Cancer",
        info: "Thyroid cancer symptoms can include night sweats, weight loss, and fatigue. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular medical check-ups and awareness of family history."
    },
    "Fatigue, Frequent Infections, Night Sweats": {
        name: "Possible Cancer Type: Hodgkin's Lymphoma",
        info: "Hodgkin's lymphoma symptoms can include fatigue, frequent infections, and night sweats. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid known carcinogens and maintain a healthy immune system."
    },
    "Cough, Shortness of Breath, Fever": {
        name: "Possible Cancer Type: Thymus Cancer",
        info: "Thymus cancer symptoms can include cough, shortness of breath, and fever. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid exposure to harmful chemicals and pollutants."
    },
    "Weight Loss, Frequent Infections, Shortness of Breath": {
        name: "Possible Cancer Type: Multiple Myeloma",
        info: "Multiple myeloma symptoms can include weight loss, frequent infections, and shortness of breath. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular medical check-ups and maintaining a healthy immune system."
    },
    "Fatigue, Pain, Lumps": {
        name: "Possible Cancer Type: Soft Tissue Sarcoma",
        info: "Soft tissue sarcoma symptoms can include fatigue, pain, and lumps. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid exposure to certain chemicals and maintain a healthy lifestyle."
    },
    "Night Sweats, Nausea, Headaches": {
        name: "Possible Cancer Type: Adrenal Cancer",
        info: "Adrenal cancer symptoms can include night sweats, nausea, and headaches. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular medical check-ups and avoiding known carcinogens."
    },
    "Frequent Infections, Persistent Indigestion, Headaches": {
        name: "Possible Cancer Type: Intestinal Cancer",
        info: "Intestinal cancer symptoms can include frequent infections, persistent indigestion, and headaches. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Maintain a healthy diet and regular screenings."
    },
    "Bloating, Frequent Infections, Fatigue": {
        name: "Possible Cancer Type: Endometrial Cancer",
        info: "Endometrial cancer symptoms can include bloating, frequent infections, and fatigue. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular check-ups and maintaining a healthy weight."
    },
    "Skin Changes, Weight Loss, Vision Changes": {
        name: "Possible Cancer Type: Melanoma",
        info: "Melanoma symptoms can include skin changes, weight loss, and vision changes. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid excessive sun exposure and use sunscreen."
    },
    "Frequent Infections, Persistent Indigestion, Weight Loss": {
        name: "Possible Cancer Type: Rectal Cancer",
        info: "Rectal cancer symptoms can include frequent infections, persistent indigestion, and weight loss. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular screenings and a diet rich in fruits and vegetables."
    },
    "Fatigue, Nausea, Headaches": {
        name: "Possible Cancer Type: Bladder Cancer",
        info: "Bladder cancer symptoms can include fatigue, nausea, and headaches. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid smoking and maintain a healthy lifestyle."
    },
    "Frequent Infections, Headaches, Shortness of Breath": {
        name: "Possible Cancer Type: Sinus Cancer",
        info: "Sinus cancer symptoms can include frequent infections, headaches, and shortness of breath. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Avoid exposure to harmful chemicals and pollutants."
    },
    "Pelvic Pain, Weight Loss, Nausea": {
        name: "Possible Cancer Type: Uterine Cancer",
        info: "Uterine cancer symptoms can include pelvic pain, weight loss, and nausea. Consult a healthcare provider for a definitive diagnosis.",
        prevention: "Regular check-ups and maintaining a healthy weight."
    },
    };

    function toggleSymptom(symptom) {
        if (selectedSymptoms.includes(symptom)) {
            selectedSymptoms = selectedSymptoms.filter(s => s !== symptom);
        } else {
            selectedSymptoms = [...selectedSymptoms, symptom];
        }
        errorMessage = '';
    }

    function diagnose() {
        if (selectedSymptoms.length !== 3) {
            errorMessage = 'Please select exactly 3 symptoms.';
            possibleCancer = null;
            return;
        }
        
        const selected = selectedSymptoms.join(",");
        possibleCancer = cancerTypes[selected] || { name: "No specific cancer type found", info: "", prevention: "" };
    }
</script>

<style>
    .symptom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin: 5px;
        cursor: pointer;
        position: relative;
        width: 48%;
        box-sizing: border-box;
    }
    .symptom-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .selected {
        background-color: #e0ffe0;
    }
    .tick {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        color: green;
    }
    .cancer-info {
        margin-top: 20px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f9f9f9;
    }
    .diagnose-button {
        margin-top: 20px;
        padding: 10px 20px;
        border: none;
        background: #28a745;
        color: white;
        font-size: 16px;
        cursor: pointer;
        border-radius: 8px;
    }
    .diagnose-button:hover {
        background: #218838;
    }
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 50px 40px;
        background-color: #f6f6f6;
    }
</style>

<div class="container">
    <h1>Symptom Checker</h1>
    <h3>Select exactly 3 symptoms</h3>
    <div class="symptom-container">
        {#each symptoms as symptom}
            <div class="symptom {selectedSymptoms.includes(symptom) ? 'selected' : ''}" on:click={() => toggleSymptom(symptom)}>
                {symptom}
                {#if selectedSymptoms.includes(symptom)}
                    <span class="tick">✔</span>
                {/if}
            </div>
        {/each}
    </div>
    <button class="diagnose-button" on:click={diagnose}>Diagnose</button>

    {#if errorMessage}
        <p style="color: red;">{errorMessage}</p>
    {/if}

    {#if possibleCancer}
        <div class="cancer-info">
            <h4>{possibleCancer.name}</h4>
            <p>{possibleCancer.info}</p>
            <p>Prevention: {possibleCancer.prevention}</p>
        </div>
    {/if}
</div>
