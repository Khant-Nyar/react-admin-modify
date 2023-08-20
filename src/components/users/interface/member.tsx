export interface Member {
    id: string;
    walletAddress: string;
    email: string;
    firstName: string;
    lastName: string;
    userName: string;
    profileIcon: string;
    profileImage: string;
    fishingCareer: number;
    mainField: string;
    mainRod: string;
    mainReel: string;
    mainLine: string;
    introduction: string;
    role: 'user' | 'admin';
  }