"use client";
import API from './api';


// get latest blog post
export async function getLatestBlogPost() {
    try {
        const res = await API.get('/blog/latest');
        console.log("\n\nres:", res)
        if (res?.status === 200 || res?.data?.sucess) {
            return res.data.data;
        }
        return res.data;
    } catch (err) {
        console.error("Error fetching latest blog post:", err);
        return err.message;
    }
};

// get all blog post
export async function getAllBlogs( page, limit ) {
  try {
    const res = await API.get(`/blog/?limit=${limit}&page=${page}`);
    if (res.status === 200 || res.data.success) {
      return res.data;
    }
    return null
  } catch (err) {
    console.error("Error fetching latest blog post:", err);
    throw err;
  }
}

// get single blog post
export async function getSingleBlogPost(id) {
    try {
        const res = await API.get(`/blog/${id}`);
        if (res.status === 200 || res.data.success) {
            return res.data.data;
        }
        return null;
    } catch (err) {
        console.error("Error fetching latest blog post:", err);
        throw err;
    }
};


// get latest publication post
export async function getLatestPublication() {
    try {
        const res = await API.get('/publication/latest');
        if (res?.status === 200 || res?.data?.sucess) {
            return res.data.data;
        }
        return null;
    } catch (err) {
        console.error("Error fetching latest post:", err);
        throw err;
    }
};

// get all publication post
export async function getAllPublication( page, limit ) {
  try {
    const res = await API.get(`/publication/?limit=${limit}&page=${page}`);
    if (res.status === 200 || res.data.success) {
        return res.data;
    }
    return null
  } catch (err) {
    console.error("Error fetching latest post:", err);
    throw err;
  }
}


// get single publication
export async function getSinglePublicationPost(id) {
  try {
    const res = await API.get(`/publication/${id}`);
    if (res.status === 200 || res.data.success) {
        return res.data.data;
    }
    return null;
  } catch (err) {
    console.error("Error fetching latest post:", err);
    throw err;
  }
};

// get latest multimedia post
export async function getLatestMultimedia() {
    try {
        const res = await API.get('/multimedia/latest');
        if (res?.status === 200 || res?.data?.sucess) {
            return res.data.data;
        }
        return null;
    } catch (err) {
        console.error("Error fetching latest post:", err);
        throw err;
    }
};

// get all multimedia post
export async function getAllMultimedias( page, limit ) {
    try {
        const res = await API.get(`/multimedia/?limit=${limit}&page=${page}`);
        if (res.status === 200 || res.data.success) {
            return res.data;
        }
        return null
    } catch (err) {
        console.error("Error fetching latest post:", err);
        throw err;
    }
}

// get single multimedia
export async function getSingleMultimediaPost(id) {
    try {
        const res = await API.get(`/multimedia/${id}`);
        if (res.status === 200 || res.data.success) {
            return res.data.data;
        }
        return null;
    } catch (err) {
        console.error("Error fetching latest multimedia post:", err);
        throw err;
    }
};


// get latest training post
export async function getLatestTraining() {
    try {
        const res = await API.get('/training/latest');
        if (res?.status === 200 || res?.data?.sucess) {
            return res.data.data;
        }
        return null;
    } catch (err) {
        console.error("Error fetching latest training post:", err);
        throw err;
    }
};

// get all training post
export async function getAllTrainings( page, limit ) {
    try {
        const res = await API.get(`/training/?limit=${limit}&page=${page}`);
        if (res.status === 200 || res.data.success) {
            return res.data;
        }
        return null
    } catch (err) {
        console.error("Error fetching latest training post:", err);
        throw err;
    }
}

// get single training
export async function getSingleTrainingPost(id) {
    try {
        const res = await API.get(`/training/${id}`);
        if (res.status === 200 || res.data.success) {
            return res.data.data;
        }
        return null;
    } catch (err) {
        console.error("Error fetching latest training post:", err);
        throw err;
    }
};

  