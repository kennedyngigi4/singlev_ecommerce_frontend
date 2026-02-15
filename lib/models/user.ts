
export interface Profile {
    gender: string; 
    dob: string;
    profile_image: string;
}

export interface Location {
    address: string;
    lat: string;
    lng: string;
}

export interface User{
    id: string;
    fullname: string;
    email: string;
    date_joined: string;
    phone: string;
    profile: Profile;
    role: string;
    locations: Location[];
}

