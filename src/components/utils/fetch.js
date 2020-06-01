import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// export const [form, setForm] = useState([]);

export const fetch = async (filters) => {
  const history = useHistory();
  const sanityClient = require('@sanity/client');
  const client = sanityClient({
    projectId: 'ogg4t6rs',
    dataset: 'production',
    token: '',
    useCdn: true, // `false` if you want to ensure fresh data
  });

  const query = `*[${filters}] | order(category asc) | order(botanicalName asc)`;

  let response = await client.fetch(query);
  setForm([...response]);
  if (form === undefined || form.length === 0) {
    // document.getElementById('spinner').style.display = 'none';
    // document.getElementById('searchCondButton').style.display =
    //   'inline-block';
    alert('...no plants match those specifications...');
    document.getElementById('resultsArea').style.display = 'none';
  } else {
    history.push('/search');
    document.getElementById('resultsArea').style.display = 'block';
    document.getElementById('searchArea').style.display = 'none';
    window.location.href = '#resultsArea';
  }
};
