const axios = require('axios');
const API_URL = process.env.NEXT_PUBLIC_API_URL
let ASYMMETRIC_PUBLIC_KEY
const CryptoJS = require('crypto-js')

export function getGlobalAsymmetricPublicKey() {
    // If the key is null or undefined, reset it to the default value.
    if (!ASYMMETRIC_PUBLIC_KEY) {
      ASYMMETRIC_PUBLIC_KEY =
        '3f1c5d283446599517d02007e306df5209bdf697aba063d46d48aaf7d0a584e5'
    }
  
    return ASYMMETRIC_PUBLIC_KEY
  }

  export const decryptDocumentData = (data) => {
    try {
      const secretKey = getGlobalAsymmetricPublicKey()
      console.log("this is the data before decryption " , data)
      const decryptedData = CryptoJS.AES.decrypt(data, secretKey).toString(
        CryptoJS.enc.Utf8,
      )
      return JSON.parse(decryptedData)
    } catch (error) {
      console.log(error)
    }
  }

export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/get/controller/fetch/user/profile/${userId}`)
    return decryptDocumentData(response.data);
  } catch(error) {
      console.log(error);
      throw error
  }
}

export const getTopEightColleges = async () => {
    try {
        const response = await axios.get(`${API_URL}/get/controller/fetch/top/five/accepted/colleges`)
        console.log("meowwwwwwwwwwwwww")
        return decryptDocumentData(response.data);
    } catch(error) {
        console.log(error);
        throw error
    }
}

export const getTopFiveLikedActivities = async () => {
    try {
        const response = await axios.get(`${API_URL}/get/controller/fetch/top/five/liked/extracurriculars`)
        return decryptDocumentData(response.data);
    }
    catch(error) {
        console.log(error);
        throw error;
    }
}

export const withTimeout = async (timeout, promise) => {
    return new Promise(async (resolve, reject) => {
      // Set up timeout
      const timer = setTimeout(() => {
        reject(new Error('API Timeout'))
      }, timeout)
  
      try {
        const response = await promise
        clearTimeout(timer)
        resolve(response)
      } catch (error) {
        clearTimeout(timer)
        reject(error)
      }
    })
  }

