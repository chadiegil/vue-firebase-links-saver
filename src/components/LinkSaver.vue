<template>
  <div>
    <div class="container">
      <div class="nav-bar">
        <a>Save Link</a>
        <div class="close">
          <div class="line one"></div>
          <div class="line two"></div>
        </div>
      </div>

      <div class="sender-area">
        <form @submit.prevent="saveLink">
          <div class="input-place">
            <input
              placeholder="Put the link."
              class="send-input"
              type="text"
              v-model="link"
            />
            <div class="send">
              <button type="submi" class="send">
                <svg
                  class="send-icon"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        fill="#6B6C7B"
                        d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808 L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193 c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409 C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="container_card">
      <div v-for="link in linksList" :key="link.id" class="info">
        <div class="info__icon">
          <span
            class="material-symbols-outlined"
            style="color: white"
            @click="copytext(link.link)"
          >
          </span>
        </div>
        <div class="info__title">{{ link.link }}</div>
        <div class="info__close" @click="deletePost(link.id)">
          <svg
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
              fill="#393a37"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase/init.js";

const link = ref("");
const linksList = ref([]);

function isValidURL(url) {
  // Regular expression pattern for URL validation
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  // Check if the URL matches the pattern with http:// or https:// prefix
  if (urlRegex.test(url)) {
    return true;
  }

  // Regular expression pattern for URL validation without http:// or https:// prefix
  const urlWithoutProtocolRegex = /^[^ "]+\.[^ "]+$/;

  // Check if the URL matches the pattern without http:// or https:// prefix
  return urlWithoutProtocolRegex.test(url);
}

// posting the links or saving to firebase
const saveLink = async () => {
  if (link.value.trim() === "") {
    alert("input should not be empty");
    return;
  }
  const isValid = isValidURL(link.value);
  if (isValid) {
    const colref = collection(db, "links");

    const dataObj = {
      link: link.value,
    };

    await addDoc(colref, dataObj);
    link.value = "";
    console.log(link.value);
    fetchData();
  } else {
    alert("URL should be valid (https://sample.com)");
  }
};
const fetchData = async () => {
  const links = await getDocs(collection(db, "links"));
  const linkLocal = [];
  links.forEach((doc) => {
    const post = {
      id: doc.id,
      link: doc.data().link,
    };
    linkLocal.push(post);
  });
  linksList.value = linkLocal;
};

const deletePost = async (id) => {
  await deleteDoc(doc(db, "links", id));
  fetchData();
};

const copytext = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied:", text);
      // You can show a success message or perform additional actions here
    })
    .catch((error) => {
      console.error("Error copying text:", error);
      // You can show an error message or handle the error here
    });
};

// getting the links from the firebase firestore
onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}

.container {
  width: 100%;
  height: 100px;
  background-color: #343541;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.nav-bar {
  width: 100%;
  height: 40px;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-bar a {
  color: #6b6c7b;
  white-space: nowrap;
  margin-left: 10px;
  user-select: none;
}

.close {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.line {
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: #6b6c7b;
  border-radius: 30px;
}

.sender-area {
  background-color: #343541;
  width: 100%;
  height: 70px;
  display: flex;
  border-radius: 8px;
}

.send-img {
  width: 30px;
}

.send-input {
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  height: 40px;
  width: 100%;
  border-radius: 7px;
  background: none;
  color: white;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-left: 5px;
}

.send-input::placeholder {
  color: #828e9e;
}

.input-place {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-left: 10px;
  align-items: center;
  background-color: #40414f;
  border-radius: 7px;
  height: 40px;
  width: 280px;
  gap: 5px;
  border: 1px solid #2e2f3a;
}

.send {
  width: 30px;
  height: 30px;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.send-icon {
  width: 17px;
}

/* Card */
.container_card {
  width: 100%;
}
.info {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 89%;
  padding: 12px;
  display: flex;
  background: #509af8;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  margin: 10px;
}

.info:hover {
  background: #2d82f1;
  cursor: pointer;
}

.info__icon {
  width: 20px;
  height: 20px;
  display: flex;
  transform: translateY(-2px);
  margin-right: 8px;
}

.info__icon path {
  fill: #fff;
}

.info__title {
  font-weight: 500;
  font-size: 14px;
  color: #fff;
}

.info__close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: auto;
}

.info__close path {
  fill: #fff;
}
</style>
