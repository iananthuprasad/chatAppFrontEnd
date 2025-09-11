import React, { useState } from "react";
import "./Right.css";
import SearchFriends from '../SearchFriends/SearchFriends';
import FriendRequests from '../FreindRequests/FriendRequests';

const Right = () => {
  const profile = {
    photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFRUXFxgXFxcVFxUXGBUXFRcXFxUVFRcYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABCEAABAwIDBAkBBQQIBwAAAAABAAIDBBEFITESIkFxBhMyUWGBkaGxwSMzctHwQlKC4QcUFSRDYpKyNGNzg7PS8f/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/xAApEQACAQMEAgICAgMBAAAAAAAAAQIDBBESITEyIkETUSMzFHFCYbEF/9oADAMBAAIRAxEAPwDGtCe0JoUjF5/2egiOAXQF0BdXNl0dDV3ZSCT3WVSRj3WCrqqbVSVk6qpJ7myYpU29xetUSWAWoBe6yuaCnshqSEaq6o2jPvtceWqNWqYWlALenvqZPGzJPDVGZhZNNQkh4nDV1rUMagpvXFdgjUkGBIkKqqa/ZbfXu8e+3eqz+13k5HyyR4W85A53EImoDxwB9FXV8oVVHizyDc39SfVSPrhI1wIAIzy9zbiVdW7T3ByuU47A23d2SPZWABA08HC4OQPLIFwt4E2RctCSE/FY4MSb8txkuLhRPxEEaqrqqVwOnsuRwO1sVWdGDeWHp1ppYRO59zdT9WbKKFq0lBQXaDZEjH0hect8sycpLfBMFU4/tH1WzlwIOzsnR9G267I9FSpOMHuFpxlJGQic7vJVjRk8VePwYNGiraiHZeAFSFSMnhE1KbiuTXYH2FZCl62SNnBzxflfP2QeBRbgV7QNtMwjgfbinU8QYmots3TIgAABYAW9E6ye03SLUhVUvQN5GWXU8NSQ/wAhx88BSNKFLykHlKOJ6hTQaXJCQBAul8UzrV3xvkt8sUHvnCCnqkwy5IWRjirxpr2DnW+iCpe5xUUNOQbo1sRAzRVJSXTPyKKwhOUXJ5ZFTstqUYySysYcMCnNCANEpKomHjlFSXnWyRDjwVj/AFQBD1teyM2c4C3AZn9ZKIpy4Rd55bIjE69wCAdPqhcQnDGnPO2d8uPupYek7GuuBkOzcZfyWYxXEjK8u0GZt4pujQk5eSA1K0YrZ5ZHPWOdqcvy0UTJSFC03GaeGHuWhpijPc5SZM2oNstE6Oxtf8lEIX/uppfbIrsL0RuWVHWmN17AgWyJ7tBf1Wuo6qOXsixPjl5LDAAjLRF4fMWubvFoDte6+tkKUd8osmntI2VThI2rEaX9bf8AxBVNAANFZ4LXGUEG7rGwcQMxYfmiMQjyWXVqy1bmjRhFRMNM2zwFtsFbuBY6uH2i2uBj7Nq1LbdGTc41FtFELInqxZRx6Kc6JP8A9DaQzbPxKfERkspVC8oWsxEZLKVH3oQrd7hKvU2OBncCLqKlzLObqDkgsGG4ETWMyWpF+ImluXWC9KyMpRcd44eS0kOOQOFw8eeS82jjRLGrOdy4vAw7aEtzfux6EG217JLDhJR/Nl9Ij+JD7Z51croYVJZSxsQZSwaUKWQfqV1sCMEaeGBV+Rh1RQM2FPjpr8ESGqWLVV1sv8aQNLQXsrChobWREQCOp2qrmwE0h0UGSZURou6Y2RoN3IWQedzK47OWtzyJBs0cB+84j4+Vh6h4Oa239IjTHs5dsegGdvc+iwdytqzjmGpCt1PfSjh7rKenpL6ptMzNWcZACYnPSsC1OCfJyGmA4IyOIDgo4wioAlZTf2OQgkTU0d1JU4Qxw0zU1OyxVrFEbIKk1wwzijE1mEmPMC6Eb58u71XoYprrN9J8N2PtWZC9njnofVMU6rbwxWrRS3RbdEbdWcxe+et8/A8lbYg3dWY6Dykvc0k2AyHgdc+HBazEeys+6i1UDUpJx2MFiH3q1+CO+zasfif3i2WCDcatW16ozLnsXcJyCL2ckLDoj2jJJX/YYodSlxNmSyFT94FtsUGSxVWPtQhWz8glXobLBewEZUjJV2DndCPeVqZ8BWK3I4olOGJ0TU8rCk9x4jskn7QSVMo486U0QUXFTRo8jSp8EoC6AkAnAIeQogpWJlk9oXHMJhkRsUqqdqymbKowL1EWzpghnzZjmhHVKHFVZwJ4EfK5LcWfJT/0gYs6SR0bm/dOI8iN039VkT3rW/0mQltVe2Tm7Q8dAb9+ixzn2Pct21x8SwZ9w8zCoCj2KtgcMkeHZKakcnU2GxoymCqW1gCnixIDQJaVOWBuNWKNPSt4qzhdkqbCa5ruFvNW73CyX0sLqTCI3IXFacPie3vaR7ZKsqcVc3JrB5lQsxh5O+2zTr+YPFEjF8lHJcFX0Hc4VFr5Fpa4d9tFuMSO6vN8D2zURiPJ3WXv4C5dfwtdeiYi/dQ71eaYCi9sGExE/aLVYNPujksriZ+0Wgwk7oT1t1QlX7GqpZcgrFkmSoYJLI6OoySt8syGqHU7ihyWLqx9oCtTiM2Sy02cg5pe3WJBavQ1+Dt3Ai58lHg8e4FLXCy1dOYCUX5DI5F0yoHbXHPWNKO4+gsy+KSD2ikqaCcGSBRLEKxFsCvM0afBI0J4TWhSWQwggurgSBUEjSmkqRMkC4BUZE96GdIpZAhZkWCFJMP/AKRIethp52W02TfLz9l55LEWneH5LeYwL0MXHZldfuG027fqstMwEAH9eK07WWmGPpsWr0/8vsr4XZ/r0R5zQUkOybI+IbvimZP2LQW+CEBrRci/hxJ/JRx4g4dkNHHJrfki6nqmbl7i7XHKwuQRm641sQPVA2UIMovJcUeKvc5rd1t7N2rBovkBthotbxtdaYVTn07nN1bm7MXA+VhWC7gPHM9wWtwR5ccxcG9/G+t0CvBch6Enko6rFpGmzHEHIk8RxAHcfFRy18khBe9xOepPEkn3JU3SDDupkyNw4X5XyIPp7hARoiSUdgkY5nlmm6HyR7UjiD1o0Itslju1kNDfysVpK926s70boSxznuaQXNGzfuubnzsFoqwbiz7zGpMGliTRjcT7YWlwePdCz+KNs4LUYQ3dCeteiELjsGBqnaMk4M0RTIEveNZGKHUrq0bvks8W745rYVdPurMVsdnjmlKEvMNVX4za4O3cCWItUWEybgU1UbrZytBnRT1FWI10RI6OFSCFYcpbmjkreqKSs+pSVdZJ5zCjYwhIUbGFMjShwPATwkAnNQworJpUic1l1OCG9iEJsiL6lMfEraWKVJornhBzMKtXQqKSFdF4APc7gkYkbLDId17LeDSOy7yJCyNTTuY97HX2mktPgW5H3C2EEJGmVxY/z9AiukHR7rIm1MZHWbO+3g8NFtoHg7LzTVGuovD9/wDTqkMxPOKkjaB8Ajad17JYhSOABc0i9iCR8d6jpR8LQbTQik4yLWOkDs1ybDWHMgZC2Vx624pUlQA25z4Dw5qKep2hYJdOWcIdUoqO4CWtF+A4WC0PRipjzudMlRNgvq4DzVtQU7Bm17b9/FEqYcdysFJPKRpK2GKU7JAJGhtldA0MMcMrQ5jQbnZdYccjYpTVMcYBkeW30OycyNbJTPEjbNdtB2hsdeFuRQ3sXTfDLatbdwPGxHlknVEe6OShIzGd7Afl9EfMzcHJI3D4Kx5MTjbN9vNaTCWbg5Kgx1m+3n+S0+GAbI5LTs+iM667llC3RWMTMkDFwVjGckpe9xih0I6qLdWRxVlnt5rcTM3fJZDH2WczmUlbS/KgtT9bLrDuyFO8oegO6FK8rak8QYnDkLiGSkUUZyT7rEfI6OC6mpKu5x5lCUbGVWRSIyOVGnFmjTlsGtKeChGSp4lQ8BUwoFGNGSrGzIyOcWV4IHVexKVwBROentejqIhUYpWJCEJz3qVpyQJ8nR4I2QojEtp8Wwwfs7PhnfuPj4poKeyWyonh5GI7o8ydSvjD2PFiHD3GVvRcp3gOHot500w6PqZJm20p7AcCDI11+d/ZecaFbNGaqx1GbU8ZF3hT278bvL9frVRVtCLkg/UeiCils4O4o81YJ7/1oqyi1LKCQnFxwxtHIW2Bia4Ak+vBaPDK8N2dmnFwNchr5Kla0a/CNpXk6ONvJUlLIeKWC0q6R1UWGYBjWaNbne4AJJ8vdEPhDXA2sGiwA0UtI5oZfihJXdY5rO8kuPgNfbL+JVeZYSKykor6J49L9+flw/Xirx7NwclVytVyeyOSTu1iWDqO6yYfpU2z2cz9EXh1XkFB0sF3xjxP0RmHUe6FoWbehCFzjWy7oJCbK6j0VPRxWsreJK3nYYpdSwDLtHJZPpTHYx/iPwtizsjksn0v1i/EfhZ9u/zL+yW/Bk+H9kKV5Q9E7dUhet6XRi8OQ6I5J6HifkpOsWM+RwlSUW2kq4OPJ2Sqdk6qWS2UrZlpypZLQrYLYTJ4mVU2dP69CdEKqxaCdSx1dlTioSMyhUsMl1covW1ilZUrPtmR9OclZoA8Ms+uU7Z0A1yftoE4HKQY6pXBVKrmnSpdqRwY3UkDlcgXKoqbYZTSLDGapppZWPc3acxjmNPaIEoN7eZ8bZ6LDzRXVv0pP97f+6CWDlHZjfYIJgWnRhogsexOT+RtlaMsk7rEVPBxQ5iTGUxdxaYTDUDIXWgw6ZobfJZZtP42VhS4dK62yShTpoYhUkap07Q25Nv1pzRODxGxkcLF2g7mjQfVBYdhFrbRLj48MuCuZ5dh0TP37t9Bf6IcGlJYLVE5RZypKuf2ByVDMVoGs3RyWfe9wtDqYrpb95H5/RXVB2QqbpePtI/P6K/oG7g5LRsf1oz7vuFxu0VjG7JVp4I5hySl2/NjNHqXcY3RyWS6X6xfiPwtZD2ByWT6X9qL8R+Fn2/7l/Zz6MfRM3VHUGxRtANwILFja3Nb04+ICD8h8U+SlEyq4ZEZEs34xvUgwPSTA1cU/GRrR5EAU5EmFRlif1AtJGnNT2jwThGu1lsEYSKnESeIlRtZLJEcN7q4om5IOCnVxSxZIbZwthNexSVM7Ixd7g3nqeQ1Ko63pAP8Jn8Tvo0fVQoSlwiuUuQmqcxub3bI9z+EcSqmXGX3aI9xoc05WJcWuBaXHwIBtogJ5XPJc43J4n9ZBRu4cwm6VCMVuClVb2Lp8TpQTe77kgniTqDzUcB7xY9ymw9+9ZW1Rh3WbzcpBw0Dx/7eKtOK4Rak8FTIy4UAjVtFBwIPI8E0w52sl9eBhwyRUVMNoXtnwWspKZoAyVJSUZJB7itC2UNALiqOT5ZKj6CI2Bou7IDv4Kqw6Tr6oyfsRgtb4k22j8IWvrXzvEMXHU/ujvP0CvaCmZC1sbfPvJ4lHt4anqfBSrJRWn2Zb+2Cx72Si4a5zQ8a5EjMcdNQtzSV8UjQY3tdlwIy5jULzTGPv5x/zX8O83VeCWnaaXNI4tNj6oVe1VV84YKFZxNf0yF5IvP5CvKDsDkvPHYpI4jrCX7Om1+fFazDekkJADj1Z/zaf6h9bI1tD4oaZC9fyllGgOoRjdFXtna7ZLSCO8G4RzXZJG67sao9S/gG43kFkumYs6L8R+FrYDuN5BZTpkLui5n6LPtv3oq29LCMP7AQGMqxoRuBAYuFvy6gI8gFKCVbU8ar6QK5pmoEUHbJBEkjGtyXVbAPJ5IYkx0KOLE3YS8p4H1DIC2BPEKM6tcnAZGZX32QdkW1c4i9hyGd1EZatkc4KKywYxrscVzkq6bFzoxgHi47R9NPlCTVcjhZzyR3aD0GSYjbyfIvKtH0X76uKPtPBP7rN4+2Q8yq+px+Q5RjYHfq714eiqWhJwR4UYx/2AlUbOyOLt4kknicyfNcDlwJbKKyjE4+CYU4FdAVkiCwgkIsRwWkoa8PGYzWYp3XaD6oqjkLdst1axzhzAy9NfJTJExeDRV1dBfZLgJBwGfk+3H3QsYucs+Wax7HEEHiDfPjmrmlqnOc14IZp4ZjXXK6DOkpMNCs0aNtaGjKwQVXWki4y/zHQcu/kgaFjpNpznbIDrZgG4Hcq7FKvaed8kcOHkLcEJW+X5MNKvhbIv8ABMZibuscGuOpdkST4rWUFPbedmTp5ryBzQbZL1PopO40sW2bm1vIE29k5FehVyyYqd15pydetf8A7iEM/VFVZ/vE3/Vf/uJQkxzQveTiMgAWN78PBNaVy3v+ikAuK+wmnrHxm8bi0+B15jitJQdM3gWlYH+Lcj6HI+yyLfNODkOdGE+Qik1wet0PTikc0Avcw2tZ7T8i4QWP1zJnRmN7Xi5zaQe5eakpN7bbZHv9M0qrCEJa4natsHsFCN0KvxhE9HqrrIGOOtrHmMioMZ4Jma8QcOQSkCu6UKpo2K5pWoMXgOw1oyXFI1q4i4QI80LU1rU9dss2pk1oEZCE6Zy7EdNCNdgyu5yHdv8AwqwiiLnNYNXENHMmw+Vmuk0+3VSkZgO2G/hj3AB4ZI1nHVNP6AXkkopFYuEpLoC0zOEuAp1krrjhjSukrjgnEZLsHHCuhcISBVvRBYQAWGSsKGmIc1+rC7ZPJ+6flNpKHbYC058QnUcpZ9m/JoO1n/lzsq5Xou4kGI4bs3uPEW91TbbmuNjb63W1nAc2xOR7LvoVkMShLXZ8DZSnnk6ccbofFVyFvV3sONhnmnU2FvfwAb+8ePIaqCjzNuP5rbf1ZrWd9jme+2Zz8lDWDo7vcyLqPZcGDUkNue8m3yvUzRf1eJl7bIaLWPcBYe/usq7CHOjM1vtLhzWjgGm9v13q+nquuDgCbNAAHjxsrJtE6Vk88MhMrydS9xPMkk/KZONU6pZszPAN88z4nP6rkhuUPfJVkScz9rkuSNXGDI8reuSsVGhqe1TMiyUBKguTtGS5GPtbHOwU8LckymF5X+Fgoz9kM23QuoIEjOAIcPPI/AVliD7kLMdG6rYnbfR+4fPs+/ytLiYsQhT2iSuxJSFW1MVT0hVtTFLxYVliCuJrVxG2BHmocntchGPU0bklVW5p02GwVIha+d3+G3cHfI64YPLM+SwDnHU6kknmTc/K0/SybZihi4uvM7zOxGD5NJ/iWYaU7aQ0wz7Yjcz1THAJoT2FRbOaYAE1slG4KQqNSczjtF0HJdak0arsnHCkE46JoUHFxhNTsybPAtBV9VAFtiAVlNu2w7yWhwas61pJFiDbvytkuaLxfonpIbMIOl78uSy+Ny3eRrY29Fqa+bZY49wyWLebnPioityanGCSAeuvpxW7p5zKGZAAt2rcOA+pWGaFrMHJcxo4bAt/qP5K+dysCzrKuzC1p2jxI0HgE6jZsQOPF2Xqg2Rna2SrbExssY3z9B/Ncvsv9I85qRaU8z8kKZ6bif3pGmZ+V0KoMheEo87+XyF1yfTi7TzA91xwS/s+yrXE3VtL2VTy6qiILakG7coWhze895PspY32YPM+gTMK7N+8q3G52SwjeQQRqDceWa2NVUiRrHjRwB/NYxpOaucEnJZsH9k3HI/z+UGfBePJfUZVxTlVFI1XFOgxQSTDmhJdboki4QLLPKGohq4klKnJo0yv6Z/8T/2Yf/GFQBcSWhT/AFRM2fZj49Smv7QSSVyCQppSSUx5IGs4Lp1KSSn2SPekEklz5IFUHdZ+I/CIw6VwIAJAvwJCSSrIsuxf9IfujzCzVZ94fL4C6kp9FqnYTPqtVhJ+yj/C3/c5JJcRDkurbwRGMfsckklb0Ejyjz7FPvj+Irv7I/XFJJDfAL2Qv4J1Jp/F9Ckkulwd7DZ9FUP19flJJVhyyAuo+6/gKlw8boXUlf0cwm+is8E7Z5H5CSSWn1LR5NTSK1gXEkKAUOaupJIoM//Z",
    realName: "Ananthu Prasad",
    username: "asmodeusatan",
    summary: "Not You Not The Gods, ME !", // try empty
  };

  const [imgError, setImgError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Get initials from real name
  const getInitials = (name) => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    if (parts.length === 1) {
      return parts[0][0].toUpperCase();
    }
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  };

  return (
    <div className="right">
      <div className="right-profile">
       <div className="right-profile-card">
  {/* Edit button */}
  <button className="edit-profile-btn">Edit Profile</button>

  <div className="right-photo-userName">
    {!imgError && profile.photo ? (
      <img
        src={profile.photo}
        alt={profile.realName}
        className="profile-photo"
        onError={() => setImgError(true)}
      />
    ) : (
      <div className="profile-fallback">
        {getInitials(profile.realName)}
      </div>
    )}
    <div className="name-userName">
      <h2 className="right-profile-name">{profile.realName}</h2>
      <p className="profile-username">{profile.username}</p>
    </div>
  </div>

  <div>
    {profile.summary && profile.summary.trim() !== "" ? (
      <p className="profile-summary">{profile.summary}</p>
    ) : (
      <button className="add-summary-btn">Add Summary</button>
    )}
  </div>
</div>

      </div>

      <div className="friends">
        <div className="friend-profile-card">
          <div className="show">
            <button
              className="toggle-view-btn"
              onClick={() => setIsSearching(!isSearching)}
            >
              {isSearching ? "Show Friend Requests" : "Search New Friends"}
            </button>

            {isSearching ? <SearchFriends /> : <FriendRequests />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;


