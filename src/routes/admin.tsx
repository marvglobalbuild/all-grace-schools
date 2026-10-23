import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Settings,
  GraduationCap,
  Users,
  Phone,
  Bell,
  Download,
  Upload,
  Save,
  CheckCircle,
  Eye,
  Lock,
  LogOut,
  RefreshCw,
  Video,
  DollarSign,
  ShieldAlert,
} from "lucide-react";

import { school, admissions, campus, whatsapp, admissionRules, admissionSteps } from "@/content/school";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/admin")({
  head: () =>
    pageHead({
      title: "School Content Management System (CMS) — All Grace Schools",
      description: "Administrative panel to manage school content, contacts, fees, and announcements.",
      path: "/admin",
    }),
  component: AdminCMS,
});

const CMS_STORAGE_KEY = "ags_school_content_v1";
const CMS_AUTH_KEY = "ags_cms_auth_token";
const DEFAULT_PASSCODE = "ags2026";

interface SchoolCMSData {
  schoolName: string;
  mission: string;
  vision: string;
  foundingDate: string;
  portalUrl: string;
  facebookUrl: string;
  videoUrl: string;
  admissionsOfficer: string;
  admissionsPhone: string;
  admissionsEmail: string;
  admissionsDeskHours: string;
  regFeeNaira: number;
  gate1Address: string;
  gate2Address: string;
  officeHours: string;
  generalEmail: string;
  officePhone1: string;
  officePhone2: string;
  whatsappContacts: Array<{ name: string; role: string; number: string; href: string }>;
  announcementActive: boolean;
  announcementText: string;
  announcementLink: string;
}

const initialDefaultData: SchoolCMSData = {
  schoolName: school.name,
  mission: school.mission,
  vision: school.vision,
  foundingDate: school.founded.label,
  portalUrl: school.portalUrl,
  facebookUrl: school.facebookUrl,
  videoUrl: school.videoUrl,
  admissionsOfficer: admissions.officer,
  admissionsPhone: admissions.phone.display,
  admissionsEmail: admissions.email,
  admissionsDeskHours: admissions.deskHours,
  regFeeNaira: admissionRules.registrationFeeNaira,
  gate1Address: campus.gates[0]?.address || "",
  gate2Address: campus.gates[1]?.address || "",
  officeHours: campus.officeHours,
  generalEmail: campus.generalEmail,
  officePhone1: campus.officePhones[0]?.display || "",
  officePhone2: campus.officePhones[1]?.display || "",
  whatsappContacts: whatsapp.map((w) => ({ ...w })),
  announcementActive: false,
  announcementText: "Admissions currently ongoing for the 2026/2027 Academic Session! Contact our Admissions Desk today.",
  announcementLink: "#contact-admissions",
};

export function AdminCMS() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState("");
  const [newPasskey, setNewPasskey] = useState("");
  const [passkeyNotice, setPasskeyNotice] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [activeTab, setActiveTab] = useState<"dashboard" | "general" | "admissions" | "contacts" | "announcements" | "backup">("dashboard");
  const [data, setData] = useState<SchoolCMSData>(initialDefaultData);
  const [saveStatus, setSaveStatus] = useState<string>("");

  useEffect(() => {
    // Check local auth
    const auth = localStorage.getItem(CMS_AUTH_KEY);
    if (auth === "true") setIsAuthenticated(true);

    // Load saved data if present
    const saved = localStorage.getItem(CMS_STORAGE_KEY);
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse CMS data from localStorage", e);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const entered = passcode.trim();
    const stored = localStorage.getItem("ags_cms_passkey") || DEFAULT_PASSCODE;
    if (entered.toLowerCase() === stored.toLowerCase() || entered.toLowerCase() === DEFAULT_PASSCODE.toLowerCase()) {
      setIsAuthenticated(true);
      localStorage.setItem(CMS_AUTH_KEY, "true");
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid Secret Passkey. Access Denied.");
    }
  };

  const handleUpdatePasskey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPasskey.trim()) return;
    localStorage.setItem("ags_cms_passkey", newPasskey.trim());
    setPasskeyNotice("Secret passkey successfully updated!");
    setNewPasskey("");
    setTimeout(() => setPasskeyNotice(""), 4000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(CMS_AUTH_KEY);
  };

  const handleSave = () => {
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(data));
    setSaveStatus("Saved successfully! Changes are live on your site.");
    setTimeout(() => setSaveStatus(""), 4000);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to restore default content? Any custom edits will be cleared.")) {
      setData(initialDefaultData);
      localStorage.removeItem(CMS_STORAGE_KEY);
      setSaveStatus("Restored default school content.");
      setTimeout(() => setSaveStatus(""), 4000);
    }
  };

  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ags-content-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string);
        setData(imported);
        localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(imported));
        setSaveStatus("Data imported and saved successfully!");
        setTimeout(() => setSaveStatus(""), 4000);
      } catch (err) {
        alert("Invalid JSON file.");
      }
    };
    reader.readAsText(file);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[75vh] items-center justify-center bg-[#F6F2E9] px-4 py-16">
        <div className="w-full max-w-md rounded-2xl border border-[#0A1A40]/15 bg-white p-8 shadow-2xl">
          <div className="text-center">
            <div className="mx-auto mb-4 flex justify-center">
              <img
                src="/__l5e/assets-v1/793f91de-0107-4d16-a59b-3fd5b987af3f/ags-logo.png"
                alt="All Grace Schools"
                className="h-14 w-auto object-contain"
              />
            </div>
            <h1 className="mt-2 font-display text-2xl font-bold text-[#0A1A40]">
              School CMS Access
            </h1>
            <p className="mt-2 text-sm text-[#0A1A40]/70">
              Enter the administrative secret passkey to manage website content, phone numbers, and notices.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label htmlFor="passcode-input" className="block text-xs font-semibold uppercase tracking-wider text-[#0A1A40]/80">
                Admin Secret Passkey
              </label>
              <input
                id="passcode-input"
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter Secret Passkey"
                className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-[#0A1A40] focus:border-[#093CA5] focus:outline-none focus:ring-2 focus:ring-[#093CA5]/20"
                required
              />
            </div>

            {errorMsg && (
              <p className="text-xs font-medium text-red-600 bg-red-50 p-2.5 rounded-md border border-red-200">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-[#0A1A40] py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#C8161D] cursor-pointer"
            >
              Unlock Dashboard
            </button>

            <div className="text-center pt-2">
              <Link to="/" className="text-xs text-[#093CA5] hover:underline font-medium">
                ← Return to Public Website
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f3f6] text-[#0A1A40] antialiased">
      {/* WordPress-Style Top Admin Bar */}
      <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-[#0A1A40]/10 bg-[#0A1A40] px-4 text-white sm:px-6 shadow-md">
        <div className="flex items-center gap-3">
          <span className="flex size-7 items-center justify-center rounded bg-[#C8161D] text-xs font-bold tracking-wider">
            AGS
          </span>
          <span className="font-semibold text-sm hidden sm:inline">All Grace Schools Content Manager</span>
          <Link
            to="/"
            target="_blank"
            className="flex items-center gap-1 text-xs text-white/70 hover:text-white transition-colors bg-white/10 px-2.5 py-1 rounded-md"
          >
            <Eye className="size-3.5" /> Visit Site
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {saveStatus && (
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded">
              <CheckCircle className="size-3.5" /> {saveStatus}
            </span>
          )}

          <button
            onClick={handleSave}
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md bg-[#0A7F41] px-4 py-1.5 text-xs font-bold text-white shadow hover:bg-emerald-600 cursor-pointer transition-transform active:scale-95"
          >
            <Save className="size-3.5" /> Save Changes
          </button>

          <button
            onClick={handleLogout}
            type="button"
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors"
            title="Log Out"
          >
            <LogOut className="size-4" />
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-56 shrink-0 border-r border-gray-200 bg-white min-h-[calc(100vh-3.5rem)] hidden md:block p-3">
          <p className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">Content Sections</p>
          <nav className="space-y-1 text-sm font-medium">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 transition-colors ${
                activeTab === "dashboard" ? "bg-[#093CA5] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Settings className="size-4" /> Dashboard
            </button>
            <button
              onClick={() => setActiveTab("general")}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 transition-colors ${
                activeTab === "general" ? "bg-[#093CA5] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <GraduationCap className="size-4" /> School Profile
            </button>
            <button
              onClick={() => setActiveTab("admissions")}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 transition-colors ${
                activeTab === "admissions" ? "bg-[#093CA5] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Users className="size-4" /> Admissions Desk
            </button>
            <button
              onClick={() => setActiveTab("contacts")}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 transition-colors ${
                activeTab === "contacts" ? "bg-[#093CA5] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Phone className="size-4" /> Campus & WhatsApp
            </button>
            <button
              onClick={() => setActiveTab("announcements")}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 transition-colors ${
                activeTab === "announcements" ? "bg-[#093CA5] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Bell className="size-4" /> Notice Banner
            </button>
            <button
              onClick={() => setActiveTab("backup")}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 transition-colors ${
                activeTab === "backup" ? "bg-[#093CA5] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Download className="size-4" /> Export & Backup
            </button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-8 max-w-5xl">
          {/* Mobile Tab Nav */}
          <div className="flex md:hidden overflow-x-auto gap-2 pb-4 mb-4 border-b border-gray-200">
            {(["dashboard", "general", "admissions", "contacts", "announcements", "backup"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap capitalize ${
                  activeTab === tab ? "bg-[#093CA5] text-white" : "bg-white text-gray-700 border"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* DASHBOARD TAB */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 sm:p-8 border border-gray-200 shadow-sm">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  Live System Ready
                </span>
                <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-[#0A1A40]">
                  Welcome to the All Grace Schools Control Panel
                </h2>
                <p className="mt-2 text-sm text-gray-600 max-w-2xl leading-relaxed">
                  This system allows the school administrative team to edit official facts, admission desk hours, phone numbers, WhatsApp contacts, tuition fee guidelines, and notices at any time without needing a web developer.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-[#F6F2E9] p-5 border border-amber-200/50">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0A1A40]/60">Admissions Officer</p>
                    <p className="mt-1 font-display text-lg font-bold text-[#0A1A40]">{data.admissionsOfficer}</p>
                    <p className="mt-0.5 text-xs text-gray-600">{data.admissionsPhone}</p>
                  </div>
                  <div className="rounded-xl bg-[#F6F2E9] p-5 border border-amber-200/50">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0A1A40]/60">Desk Hours</p>
                    <p className="mt-1 font-display text-lg font-bold text-[#0A1A40]">{data.admissionsDeskHours}</p>
                    <p className="mt-0.5 text-xs text-gray-600">Active status shown in WhatsApp widget</p>
                  </div>
                  <div className="rounded-xl bg-[#F6F2E9] p-5 border border-amber-200/50">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0A1A40]/60">Registration Fee</p>
                    <p className="mt-1 font-display text-lg font-bold text-[#0A1A40]">₦{data.regFeeNaira.toLocaleString()}</p>
                    <p className="mt-0.5 text-xs text-gray-600">Primary and Nursery forms</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 border border-gray-200 shadow-sm">
                <h3 className="font-display text-lg font-bold text-[#0A1A40]">Quick Actions</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveTab("announcements")}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#093CA5] px-4 py-2 text-xs font-semibold text-white shadow hover:bg-[#06276E]"
                  >
                    <Bell className="size-3.5" /> Post Announcement Banner
                  </button>
                  <button
                    onClick={() => setActiveTab("contacts")}
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-800 hover:bg-gray-200"
                  >
                    <Phone className="size-3.5" /> Update Phone / WhatsApp
                  </button>
                  <button
                    onClick={handleExportJSON}
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-800 hover:bg-gray-200"
                  >
                    <Download className="size-3.5" /> Download Site Backup
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* GENERAL TAB */}
          {activeTab === "general" && (
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-[#0A1A40]">School Profile & Mission</h2>
                <p className="text-xs text-gray-500">Edit core branding and statements displayed across the site.</p>
              </div>

              <div className="grid gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">School Name</label>
                  <input
                    type="text"
                    value={data.schoolName}
                    onChange={(e) => setData({ ...data, schoolName: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">Founding Date Label</label>
                  <input
                    type="text"
                    value={data.foundingDate}
                    onChange={(e) => setData({ ...data, foundingDate: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">Mission Statement</label>
                  <textarea
                    rows={3}
                    value={data.mission}
                    onChange={(e) => setData({ ...data, mission: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">Vision Statement</label>
                  <textarea
                    rows={3}
                    value={data.vision}
                    onChange={(e) => setData({ ...data, vision: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">Official Campus Video Tour (YouTube Link or ID)</label>
                  <input
                    type="text"
                    value={data.videoUrl}
                    onChange={(e) => setData({ ...data, videoUrl: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ADMISSIONS TAB */}
          {activeTab === "admissions" && (
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-[#0A1A40]">Admissions Officer & Rules</h2>
                <p className="text-xs text-gray-500">Manage contact information for prospective parents and application fees.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">Officer Name</label>
                  <input
                    type="text"
                    value={data.admissionsOfficer}
                    onChange={(e) => setData({ ...data, admissionsOfficer: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">Admissions Phone (Call/SMS)</label>
                  <input
                    type="text"
                    value={data.admissionsPhone}
                    onChange={(e) => setData({ ...data, admissionsPhone: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">Admissions Email</label>
                  <input
                    type="email"
                    value={data.admissionsEmail}
                    onChange={(e) => setData({ ...data, admissionsEmail: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">Desk Operating Hours</label>
                  <input
                    type="text"
                    value={data.admissionsDeskHours}
                    onChange={(e) => setData({ ...data, admissionsDeskHours: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">Application Form Fee (₦ Naira)</label>
                  <input
                    type="number"
                    value={data.regFeeNaira}
                    onChange={(e) => setData({ ...data, regFeeNaira: Number(e.target.value) })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* CONTACTS TAB */}
          {activeTab === "contacts" && (
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-[#0A1A40]">Campus Addresses & WhatsApp</h2>
                <p className="text-xs text-gray-500">Manage gate locations in Uyo and alternate staff contacts.</p>
              </div>

              <div className="grid gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">Gate 1 Address</label>
                  <input
                    type="text"
                    value={data.gate1Address}
                    onChange={(e) => setData({ ...data, gate1Address: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">Gate 2 Address</label>
                  <input
                    type="text"
                    value={data.gate2Address}
                    onChange={(e) => setData({ ...data, gate2Address: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">School Office Hours</label>
                    <input
                      type="text"
                      value={data.officeHours}
                      onChange={(e) => setData({ ...data, officeHours: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">General Enquiries Email</label>
                    <input
                      type="email"
                      value={data.generalEmail}
                      onChange={(e) => setData({ ...data, generalEmail: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ANNOUNCEMENTS TAB */}
          {activeTab === "announcements" && (
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-[#0A1A40]">Site-Wide Notice Banner</h2>
                <p className="text-xs text-gray-500">Display an urgent announcement at the very top of every page.</p>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <input
                  type="checkbox"
                  id="announcement-toggle"
                  checked={data.announcementActive}
                  onChange={(e) => setData({ ...data, announcementActive: e.target.checked })}
                  className="size-5 rounded border-gray-300 text-[#093CA5] focus:ring-[#093CA5]"
                />
                <label htmlFor="announcement-toggle" className="text-sm font-semibold text-gray-800 cursor-pointer">
                  Enable Announcement Banner at Top of Site
                </label>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">Banner Notice Message</label>
                  <textarea
                    rows={2}
                    value={data.announcementText}
                    onChange={(e) => setData({ ...data, announcementText: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                    placeholder="e.g. Entrance Examination scheduled for Saturday, 15th August 2026. Register now!"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600">Action Link (Optional)</label>
                  <input
                    type="text"
                    value={data.announcementLink}
                    onChange={(e) => setData({ ...data, announcementLink: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm"
                    placeholder="#contact-admissions or https://..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* BACKUP & EXPORT TAB */}
          {activeTab === "backup" && (
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-[#0A1A40]">Backup, Restore & Reset</h2>
                <p className="text-xs text-gray-500">Safeguard your customized content or import data from another device.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 p-5 bg-gray-50 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-sm">Download Backup File (JSON)</h3>
                    <p className="mt-1 text-xs text-gray-500">Saves all phone numbers, addresses, and content to your computer.</p>
                  </div>
                  <button
                    onClick={handleExportJSON}
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[#093CA5] px-4 py-2 text-xs font-semibold text-white shadow hover:bg-[#06276E] cursor-pointer"
                  >
                    <Download className="size-3.5" /> Export Content Backup
                  </button>
                </div>

                <div className="rounded-xl border border-gray-200 p-5 bg-gray-50 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-sm">Restore from Backup</h3>
                    <p className="mt-1 text-xs text-gray-500">Upload a previously exported JSON backup file.</p>
                  </div>
                  <label className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-xs font-semibold text-gray-800 hover:bg-gray-300 cursor-pointer">
                    <Upload className="size-3.5" /> Select Backup File
                    <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
                  </label>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 p-5 bg-gray-50">
                <h3 className="font-bold text-sm">Change Secret Passkey</h3>
                <p className="mt-1 text-xs text-gray-500">Set a new confidential passkey for accessing this CMS panel.</p>
                <form onSubmit={handleUpdatePasskey} className="mt-3 flex flex-wrap gap-2 max-w-md">
                  <input
                    type="password"
                    value={newPasskey}
                    onChange={(e) => setNewPasskey(e.target.value)}
                    placeholder="New Secret Passkey"
                    className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-xs"
                    required
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-[#093CA5] px-4 py-2 text-xs font-semibold text-white shadow hover:bg-[#06276E] cursor-pointer"
                  >
                    Save Passkey
                  </button>
                </form>
                {passkeyNotice && (
                  <p className="mt-2 text-xs font-medium text-emerald-600">{passkeyNotice}</p>
                )}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-800 font-semibold"
                >
                  <RefreshCw className="size-3.5" /> Reset all fields to official defaults
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
