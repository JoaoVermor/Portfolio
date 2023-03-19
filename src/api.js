async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/JoaoVermor/Api/main/Data";
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}