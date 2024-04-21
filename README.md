## Laporan Praktikum

|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720156|
| Nama |  Versacitta Feodora Ramadhani |
| Kelas | TI - 3I |

### Practicum 1
1. ![Screenshot](README-pic/1a.png)<br/>
Several text will appears from the webpage. Although there is no notable difference, these texts are divided into 4 nested sections. By using this method, we could combine several components into one.<br/>

2. ![Screenshot](README-pic/2a.png)<br/>
As mentioned above, the layout stays the same. However, there is chance that error `failed to compile` will appear. This is caused by the usage of LevelContext that requires client components. Because of this, simply add `'use client'` in `main_page.tsx` will solve the issue<br/>

3. ![Screenshot](README-pic/3a.png)<br/>
As mentioned above, the layout stays the same, with the only difference is there is no usage of level parameter in each section.<br/>

4. ![Screenshot](README-pic/4a.png)<br/>
The layout will change as above<br/>

5. ![Screenshot](README-pic/5a.png)<br/>
![Screenshot](README-pic/5b.png)<br/>
![Screenshot](README-pic/5c.png)<br/>
![Screenshot](README-pic/5d.png)<br/>
![Screenshot](README-pic/5e.png)<br/>
1. The toggle button is working as intended as shown from picture above, where the page could change from white to black<br/>
2. If we refresh the website after changing the page and the theme, it will go back to its default state in `app/page.tsx`, which is the Main Page. This is due to how there is no method in preserving current state, so it will always revert to light theme as its initial variable. One of method that could be used is `localStorage`, in which it will save the variable of your current theme in your browser. Along with `JSON.parse` to change the variable to string, it will save the theme everytime it is changed.<br/>
![Screenshot](README-pic/5f.png)<br/>