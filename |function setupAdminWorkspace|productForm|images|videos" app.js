[1mdiff --git a/app.js b/app.js[m
[1mindex 6f86355..b2f9eeb 100644[m
[1m--- a/app.js[m
[1m+++ b/app.js[m
[36m@@ -175,6 +175,7 @@[m [mfunction renderAdmin() {[m
   openModal('adminModal');[m
 }[m
 function setupAdminWorkspace() {[m
[32m+[m[32m  prepareProductMediaInputs();[m
   const admin = $('#adminContent');[m
   const adForm = $('#adForm');[m
   const giftForm = $('#giftForm');[m
