type MBxParams = {
  header: string;
  body: any[];
  isPhone: boolean;
};
type ChatBoxParams = {
  isAgent?: boolean;
  message: any;
  time?: string;
};

type TkVData = {
  id: string;
  cs: {
    name: string;
    role: string;
  };
  divison: any;
  txid: string;
  date: string;
  subject: string;
  category: string;
  status: string;
};

type STData = {
  id: string;
  date: Date;
  subject: string;
  category: string;
  status: string;
};

type UtrackType = {
  zimg: number;
  ztxtStyl: boolean;
  zB: number;
  killStyle: boolean;
  newbie: Node[];
  lastRange?: Range;
  zCtrl: boolean;
  killUpload: boolean;
};

type SMsgType = {
  isAgent: boolean;
  date: Date;
  message: any;
  attachments: File[];
};

type NMType = {
  html: any;
  atmt: any[];
};

type TktData = TkVData & {
  history: SMsgType[];
};
