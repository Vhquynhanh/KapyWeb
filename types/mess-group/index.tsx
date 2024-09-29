export interface SegmentMessProps {
  userId: string;
  userName: string;
  ava: string;
  content?: string;
}

export interface SegmentGroupProps {
  groupId: string;
  userId: string;
  userName: string;
  userAva: string;
  ava: string;
  content?: string;
}

export interface MessageBoxProps {
  id: string;
  otherName: string;
  otherId: string;
  sender: string;
  ava: string;
  content?: string;
  pin: boolean;
  time: string;
  isOnline: boolean;
  isSeen: boolean;
}

export interface ManagementGroup {
  id: string;
  label: string;
}

export interface RightTopProps {
  ava: string;
  name: string;
  membersGroup: number;
  onlineGroup: number;
  openMore: boolean;
  setOpenMore: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Actions {
  icon: string;
  label: string;
  click: string;
}

export interface MoreTopProps {
  ava: string;
  name: string;
}