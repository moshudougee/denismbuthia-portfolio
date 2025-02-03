
const Contact = () => {
  return (
    <div className="main-container">
      <div className="flex flex-col gap-4 p-5 max-w-[1000px]">
        <div className='pt-5 m-auto flex flex-col justify-center max-w-[600px]'>
          <div className='pb-6'>
            <p className='subtitle'>Contact</p>
            <p className='text-slate-900 dark:text-slate-400 py-4'>Submit the form below or send me an email - mbuthiadenis@gmail.com</p>
          </div>
        </div>
        <form method='POST' 
            action="https://getform.io/f/pbovpqxa" 
            className='contact-form'
        >
            
            <input 
              className='bg-[#c2c2c5] dark:bg-[#0e2572] p-2 rounded-lg' 
              type="text" 
              placeholder='Name' 
              name='name' 
            />
            <input 
              className='my-4 p-2 bg-[#c2c2c5] dark:bg-[#0e2572] rounded-lg' 
              type="email" 
              placeholder='Email' 
              name='email' 
            />
            <textarea 
              className='bg-[#c2c2c5] dark:bg-[#0e2572] p-2 rounded-lg' 
              name="message" 
              rows={8} 
              placeholder='Message'
            />
            <button 
                className='button-contact'
            >
                Let's Collaborate
            </button>
        </form>
      </div>
    </div>
  )
}

export default Contact