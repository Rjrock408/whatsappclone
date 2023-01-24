import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import Search from './components/Search';
import Chats from './components/Chats';

function App() {
  return (
    <div className="h-full bg-[url('../src/assets/stars.jpg')] md:pt-10 md:pb-12 min-h-screen">
      <div className='flex sm:max-w-[90vw] md:mx-auto md:my-auto md:rounded-[2rem] bg-white mb-4'>
        <div>
          {/* Navbar */}
          <Navbar/>
          {/* search */}
          <Search/>
          {/* Contacts */}
          <Contacts/>
        </div>
        {/* Chats */}
      <Chats/>
      </div>
    </div>
  );
}

export default App;
