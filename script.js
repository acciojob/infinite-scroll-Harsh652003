document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('infi-list');
  let loading = false; 
	
  const addListItems = () => {
    loading = true; 
   
    setTimeout(() => {
      for (let i = 0; i < 17; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${list.children.length + 1}`; 
        list.appendChild(li);
      }

      loading = false; 
	}, 1000);
  };

   const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20 && !loading) {
      addListItems();
    }
  };

  
  addListItems();

  window.addEventListener('scroll', handleScroll);
});
