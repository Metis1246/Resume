<template>
  <div
    id="contact-section"
    ref="contactSection"
    class="min-h-[100vh] px-5 md:px-[5%] pt-32 md:pt-44 py-16 text-center text-lg opacity-0 translate-y-10 transition-all duration-1000 ease-in-out text-black dark:text-white"
  >
    <h2
      ref="contactTitle"
      class="text-3xl font-bold mb-12 opacity-0 translate-y-5 transition-all duration-700"
    >
      {{ $t("contact.title") }}
    </h2>

    <div
      class="max-w-3xl mx-auto bg-white dark:bg-black p-8 rounded-lg shadow-lg shadow-gray-300/50 dark:shadow-gray-700/50"
    >
      <form
        @submit.prevent="submitForm"
        ref="contactForm"
        class="opacity-0 translate-y-10 transition-all duration-700"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="text-left">
            <label
              for="firstName"
              class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >{{ $t("contact.firstName") }}
              <span class="text-red-500">*</span></label
            >
            <input
              type="text"
              id="firstName"
              v-model="formData.firstName"
              class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black dark:text-white"
              :class="{ 'border-red-500': errors.firstName }"
              required
            />
            <p v-if="errors.firstName" class="mt-1 text-sm text-red-600">
              {{ errors.firstName }}
            </p>
          </div>
          <div class="text-left">
            <label
              for="lastName"
              class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >{{ $t("contact.lastName") }}
              <span class="text-red-500">*</span></label
            >
            <input
              type="text"
              id="lastName"
              v-model="formData.lastName"
              class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black dark:text-white"
              :class="{ 'border-red-500': errors.lastName }"
              required
            />
            <p v-if="errors.lastName" class="mt-1 text-sm text-red-600">
              {{ errors.lastName }}
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="text-left">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >{{ $t("contact.email") }}
              <span class="text-red-500">*</span></label
            >
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black dark:text-white"
              :class="{ 'border-red-500': errors.email }"
              required
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-600">
              {{ errors.email }}
            </p>
          </div>
          <div class="text-left">
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >{{ $t("contact.phone") }}
              <span class="text-red-500">*</span></label
            >
            <input
              type="tel"
              id="phone"
              v-model="formData.phone"
              class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black dark:text-white"
              :class="{ 'border-red-500': errors.phone }"
              required
            />
            <p v-if="errors.phone" class="mt-1 text-sm text-red-600">
              {{ errors.phone }}
            </p>
          </div>
        </div>

        <div class="mb-6 text-left">
          <label
            for="subject"
            class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >{{ $t("contact.subject") }}
            <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            id="subject"
            v-model="formData.subject"
            class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black dark:text-white"
            :class="{ 'border-red-500': errors.subject }"
            required
          />
          <p v-if="errors.subject" class="mt-1 text-sm text-red-600">
            {{ errors.subject }}
          </p>
        </div>

        <div class="mb-8 text-left">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >{{ $t("contact.message") }}
            <span class="text-red-500">*</span></label
          >
          <textarea
            id="message"
            v-model="formData.message"
            rows="5"
            class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black dark:text-white"
            :class="{ 'border-red-500': errors.message }"
            required
          ></textarea>
          <p v-if="errors.message" class="mt-1 text-sm text-red-600">
            {{ errors.message }}
          </p>
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-blue-500 dark:hover:bg-blue-400 transition-all relative overflow-hidden"
          >
            <span class="relative z-10">{{ $t("contact.submit") }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Contact section refs
const contactSection = ref(null);
const contactTitle = ref(null);
const contactForm = ref(null);

// Form data
const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

// Form errors
const errors = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

// Form validation
const validateForm = () => {
  let isValid = true;

  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key] = "";
  });

  // Check required fields
  if (!formData.firstName.trim()) {
    errors.firstName = t("contact.errors.firstName");
    isValid = false;
  }

  if (!formData.lastName.trim()) {
    errors.lastName = t("contact.errors.lastName");
    isValid = false;
  }

  if (!formData.email.trim()) {
    errors.email = t("contact.errors.emailRequired");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = t("contact.errors.emailInvalid");
    isValid = false;
  }

  if (!formData.phone.trim()) {
    errors.phone = t("contact.errors.phoneRequired");
    isValid = false;
  } else if (!/^\d{9,10}$/.test(formData.phone.replace(/[- ]/g, ""))) {
    errors.phone = t("contact.errors.phoneInvalid");
    isValid = false;
  }

  if (!formData.subject.trim()) {
    errors.subject = t("contact.errors.subject");
    isValid = false;
  }

  if (!formData.message.trim()) {
    errors.message = t("contact.errors.message");
    isValid = false;
  }

  return isValid;
};

// Submit form
const submitForm = () => {
  if (validateForm()) {
    // Reset form
    Object.keys(formData).forEach((key) => {
      formData[key] = "";
    });
  }
};

onMounted(() => {
  // IntersectionObserver for Contact Section
  const contactObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // เข้าสู่หน้าจอ
        contactSection.value?.classList.add("opacity-100", "translate-y-0");
        contactSection.value?.classList.remove("opacity-0", "translate-y-10");

        contactTitle.value?.classList.add("opacity-100", "translate-y-0");
        contactTitle.value?.classList.remove("opacity-0", "translate-y-5");

        setTimeout(() => {
          contactForm.value?.classList.add("opacity-100", "translate-y-0");
          contactForm.value?.classList.remove("opacity-0", "translate-y-10");
        }, 300);
      } else {
        // ออกจากหน้าจอ → รีเซ็ต animation
        contactSection.value?.classList.remove("opacity-100", "translate-y-0");
        contactSection.value?.classList.add("opacity-0", "translate-y-10");

        contactTitle.value?.classList.remove("opacity-100", "translate-y-0");
        contactTitle.value?.classList.add("opacity-0", "translate-y-5");

        contactForm.value?.classList.remove("opacity-100", "translate-y-0");
        contactForm.value?.classList.add("opacity-0", "translate-y-10");
      }
    },
    { threshold: 0.2 }
  );

  if (contactSection.value) {
    contactObserver.observe(contactSection.value);
  }
});
</script>
