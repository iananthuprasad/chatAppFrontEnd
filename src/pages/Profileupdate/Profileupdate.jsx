import React, { useState, useRef } from 'react';

// All styles are now included directly in the component for a single-file solution.
const styles = {
container: {
  maxWidth: '600px',
  width: '60vh',
  maxHeight: '800px',
  height: '80vh',
  overflow: 'auto',
  margin: '40px auto',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  fontFamily: 'sans-serif',
  scrollbarWidth: 'none',  
  msOverflowStyle: 'none', 
},
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '25px',
    fontSize: '28px',
    fontWeight: '600',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    marginBottom: '0',
  },
  label: {
    display: 'block',
    fontWeight: '500',
    marginBottom: '8px',
    color: '#555',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxSizing: 'border-box',
    fontSize: '16px',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxSizing: 'border-box',
    fontSize: '16px',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    scrollbarWidth: 'none',   
    msOverflowStyle: 'none',  
  },
  imageSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '10px',
    border: '4px solid #e0e0e0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  editImageButton: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    background: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  editImageButtonHover: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  submitButton: {
    padding: '14px 24px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    alignSelf: 'center',
    marginTop: '10px',
  },
  submitButtonHover: {
    backgroundColor: '#0056b3',
    transform: 'translateY(-2px)',
  },
  chooseImage: {
    height: '30px',
    width: '100px'
  }
};

const DUMMY_IMAGE = 'data:image/jpeg;base64,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'

function Profileupdate() {
  const fileInputRef = useRef(null);
  const [profileData, setProfileData] = useState({
    image: DUMMY_IMAGE,
    name: 'ananthu prasad',
    username: 'asmodeusatan',
    about: 'sigma male',
    dateOfBirth: '1999-06-30',
    address: 'valiyavalappil(H),Narikkundu(P.O),amabalavayal,673593',
    email: 'iananthuprasad@gmail.com',
  });

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData((prevData) => ({
        ...prevData,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile data submitted:', profileData); 
  };

    const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Update Your Profile</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.imageSection}>
          <div style={styles.imageContainer}>
            <img src={profileData.image} alt='Profile Preview' style={styles.imagePreview} />
            {/* {profileData.image && (
              <button
                type="button"
                onClick={handleEditImageClick}
                style={styles.editImageButton}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.editImageButtonHover.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.editImageButton.background}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
            )} */}
          </div>
           <button style={styles.chooseImage} onClick={handleButtonClick}>
        Choose a file
      </button>

      {/* The actual, hidden input element */}
      <input
        type="file"
        id="image" // Keep the id for good practice with labels if you were to use one.
        name="image"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef} // Attach the ref here.
        style={{ display: 'none' }}
      />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={profileData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            value={profileData.username}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

         <div style={styles.formGroup}>
          <label style={styles.label} htmlFor='about'>About</label>
          <textarea
            id='about'
            name='about'
            value={profileData.about}
            onChange={handleChange}
            style={styles.textarea}
          ></textarea>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor='dateOfBirth'>Date of Birth</label>
          <input
            type='date'
            id='dateOfBirth'
            name='dateOfBirth'
            value={profileData.dateOfBirth}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor='address'>Address</label>
          <textarea
            id='address'
            name='address'
            value={profileData.address}
            onChange={handleChange}
            style={styles.textarea}
          ></textarea>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={profileData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <button
          type='submit'
          style={styles.submitButton}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.submitButtonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.submitButton.backgroundColor}
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Profileupdate;
