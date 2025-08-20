export async function getLandingPageData() {
  try {
    const res = await fetch(
      "https://api.delcofarmersmarket.com/api/v1/landing-page/get"
    );
    if (!res.ok) throw new Error("Failed to fetch landing page data");
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}


export async function getCategories() {
  try {
    const res = await fetch(
      "https://api.delcofarmersmarket.com/api/v1/departments/get?parent=1&sortOrder=asc"
    );
    if (!res.ok) throw new Error("Failed to fetch categories");
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

 
export const apiUrl = "https://api.delcofarmersmarket.com"