# 🚀 Deployment Guide - دليل النشر

## Vercel Deployment - النشر على Vercel

### المتطلبات / Requirements:
- ✅ GitHub Account
- ✅ Vercel Account (free)
- ✅ GitHub Repository

### خطوات النشر / Deployment Steps:

#### 1️⃣ **إعداد Vercel** - Setup Vercel:

```bash
# تثبيت Vercel CLI (اختياري)
npm install -g vercel

# تسجيل الدخول
vercel login
```

#### 2️⃣ **ربط GitHub مع Vercel** - Connect GitHub to Vercel:

1. اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard)
2. اضغط على "New Project"
3. اختار "Import Git Repository"
4. ابحث عن `ORCA-Academy`
5. اضغط "Import"

#### 3️⃣ **إعدادات المشروع** - Project Settings:

**Build Settings:**
```
Framework: Create React App
Build Command: npm run build
Output Directory: build
Install Command: npm install
```

**Environment Variables:**
```
REACT_APP_API_URL=https://orca-back-end-production.up.railway.app
```

#### 4️⃣ **النشر** - Deploy:

اضغط "Deploy" وانتظر انتهاء النشر ✅

---

## GitHub Actions CI/CD (اختياري)

### إعداد GitHub Secrets:

1. اذهب إلى **Settings** → **Secrets and variables** → **Actions**
2. أضف المتغيرات التالية:

```
VERCEL_TOKEN        = [Your Vercel Token]
VERCEL_ORG_ID       = [Your Vercel Org ID]
VERCEL_PROJECT_ID   = [Your Vercel Project ID]
```

### الحصول على Tokens:

**Vercel Token:**
- اذهب إلى https://vercel.com/account/tokens
- اضغط "Create"
- انسخ الـ Token

**Org ID و Project ID:**
```bash
vercel project ls
```

---

## الأوامر المفيدة / Useful Commands:

```bash
# تطوير محلي
npm start

# بناء المشروع
npm run build

# اختبار البناء محلياً
npm install -g serve
serve -s build

# نشر مباشر إلى Vercel
vercel

# فحص النشرات السابقة
vercel list

# فحص سجلات النشر
vercel logs [deployment-url]
```

---

## استكشاف الأخطاء / Troubleshooting:

### ❌ البناء فشل - Build Failed

**الحل:**
```bash
# تنظيف وإعادة التثبيت
rm -rf node_modules package-lock.json
npm install

# إعادة البناء
npm run build
```

### ❌ مشاكل في الـ API - API Issues

**تحقق من:**
1. متغيرات البيئة صحيحة
2. الـ Backend يعمل
3. CORS مفعل في Backend

### ❌ الصور لا تظهر - Images Not Showing

**تحقق من:**
```
الملفات موجودة في: public/
الأسماء صحيحة case-sensitive
الـ URLs نسبي وليس مطلق
```

---

## المراقبة / Monitoring:

### Vercel Dashboard:
- 📊 معلومات الأداء
- 📈 استهلاك البيانات
- 🔍 سجلات الأخطاء
- 📱 معلومات الزوار

### Logs الحقيقي:
```bash
vercel logs --follow
```

---

## نصائح أمان / Security Tips:

✅ **DO:**
- استخدم متغيرات البيئة للبيانات الحساسة
- فعّل HTTPS (افتراضي في Vercel)
- راجع الأوامر قبل التنفيذ
- احتفظ بـ node_modules محدثة

❌ **DON'T:**
- لا تضع API keys في الكود
- لا تدفع secrets إلى GitHub
- لا تستخدم كلمات مرور ضعيفة
- لا تعطي tokens لأشخاص غير موثوقين

---

## الدعم / Support:

- 📚 [Vercel Docs](https://vercel.com/docs)
- 💬 [Vercel Community](https://github.com/vercel/next.js/discussions)
- 🐛 [Report Issues](https://github.com/yourusername/ORCA-Academy/issues)

---

**آخر تحديث**: 2026-05-21
**الإصدار**: 0.1.0
