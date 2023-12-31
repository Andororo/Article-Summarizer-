import { useState, useEffect } from "react";

import {copy,linkIcon, loader, tick} from '../assets';


export const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  const handleSubmit = async (e) => {
    alert('Submitted');
  }

  return (
    <section className="mt-16 w-full max-w-xl">
      {/*Search*/}
      <div className="flex felx-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input 
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({... article, url:e.target.value})}
            required
            className="url_input peer"
            style={{width: '550px', height: '40px'}}
          />
          <button
            type='submit'
            className="submit_btn
            peer-focus: border-gray-700
            peer-focus: text-gray-700"
          >
            <p>↵</p>
            </button>
        </form>
        {/*Browser URL History */}
      </div>
      {/* Display Results */}
    </section>
  )
}
