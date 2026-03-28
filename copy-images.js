const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Hp\\.cursor\\projects\\d-CoolVu\\assets\\';
const destDir = path.join(__dirname, 'public', 'grid-images');

const filesToCopy = [
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images_A_high-end__front-view_202603281441-214fe761-a1a0-4b8d-aadb-5d834b6e38fb.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images_IMG_7589-50ed5d2b-58e0-42cc-b40a-c7ac02bb7d2e.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images_IMG_8033-063e431b-657c-4b4e-83e4-4d00d5d7f128.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images_IMG_8059-cee60880-16cf-4277-a13f-063e38d142d4.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images_unnamed__1_-727a0e72-99ab-4054-86eb-49610db100d9.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__07B67008-4ADC-431B-9B83-5A276E5FB0C5_-72b8b383-248b-45c5-bc01-3305c347604d.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__265355D8-5DEC-4E05-82DD-77EF6434ED2E_-b630d857-0d78-4e01-8e81-63de88b2f922.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__279C4AB3-D423-4DB6-A92B-42171E192D8B_-9e623905-aed3-4486-81b2-5227388abc61.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__2BDA3166-BE76-4A01-80DB-EA3E9ADAC8F4_-ebb7a5f9-40e8-4246-8b75-953714dc7979.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__2F4DFDEB-7CCD-4F0A-9F24-1307840C62E1_-0754fa68-ae20-4ffb-87e7-691ec5e8987d.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__32E7191C-4943-49F5-8C24-08C336F9525F_-f6be0be6-e4f3-4ed5-9fc6-8682765f0c12.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__34939B25-A3E7-4A0E-A02E-261B7531C773_-5b1643d1-3801-412c-a270-8884d1455dd5.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__36F38FFE-CA4A-4854-B84D-E7A8B0A2A4B8_-26e727a0-e409-4592-89d9-425306763fe6.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__612414B8-3BE7-495C-A322-934C3EEC9873_-cdd64edf-0a71-4ffb-8998-6f14f00deb29.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__6E8032EC-8A49-4EE4-888F-A18F28C0E44C_-71ae5a08-c72d-469a-9cad-b608cdfcbc08.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__7BDB169F-840B-4D58-9AC4-912BD9611BBF_-5384d29c-bd72-44d8-97d6-abfe8afca66e.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__AA261F00-5016-4B60-9985-08AB78627C2A_-393f3f14-4042-4e5c-bcd2-21f5c1044ac5.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__C0C5BE28-6145-4FAE-B252-563FB49FAB33_-362db216-d9c5-4e37-aa56-b1f6064a5ba1.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__D6A83716-C697-4983-BD0A-EBC84F4E779B_-b89d4915-db21-41c1-b4be-79c6c7a36fb4.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__D7993852-488C-43B9-8776-5B10FB1047F3_-599345e1-1ad3-4c1e-874b-09aedcb55c61.png',
  'c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_8ec4d5fd6c4201051348a51c8584a141_images__EC01F405-2D16-4FFE-B01A-616CB7E76BC9_-939098b9-83a4-4706-899d-6ec70fb25c4d.png'
];

filesToCopy.forEach((file, index) => {
  const src = path.join(srcDir, file);
  // I am capping the loop at 20 unique items and assigning them numbers 1.png to 20.png 
  if(index < 20){
    const dest = path.join(destDir, `${index + 1}.png`);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`Copied ${file} to ${index + 1}.png`);
    } else {
      console.error(`File not found: ${src}`);
    }
  }
});
