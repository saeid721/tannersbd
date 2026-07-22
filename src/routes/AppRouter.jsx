/**
 * Application routes
 * Uses React Router v6 createBrowserRouter + lazy loading
 */

import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoadingSpinner from '../components/common/LoadingSpinner';

// ── Lazy-loaded page components (core) ──────────────────────────────
const HomePage              = lazy(() => import('../pages/HomePage'));
const FacilitiesPage        = lazy(() => import('../pages/FacilitiesPage'));
const GalleryPage           = lazy(() => import('../pages/GalleryPage'));
const VideoGalleryPage           = lazy(() => import('../pages/VideoGalleryPage'));
const ReservationPage       = lazy(() => import('../pages/ReservationPage'));
const NotFoundPage          = lazy(() => import('../pages/NotFoundPage'));
const EventsPage            = lazy(() => import('../pages/EventsPage'));
const MenuPage              = lazy(() => import('../pages/MenuPage'));
const NoticePage            = lazy(() => import('../pages/NoticePage'));

// ── About dropdown routes ──────────────────────────────────────────
const HistoryPage           = lazy(() => import('../pages/about/HistoryPage'));
const PresidentSpeechPage   = lazy(() => import('../pages/about/PresidentSpeechPage'));
const LegacyPage            = lazy(() => import('../pages/about/LegacyPage'));

// ── Membership routes (Members dropdown) ────────────────────────
const MemberListPage        = lazy(() => import('../pages/members/MemberListPage'));
const LeadershipPage        = lazy(() => import('../pages/members/LeadershipPage'));
const DonorMemberPage       = lazy(() => import('../pages/members/DonorMemberPage'));
const LifeMemberPage        = lazy(() => import('../pages/members/LifeMemberPage'));
const PermanentMemberPage   = lazy(() => import('../pages/members/PermanentMemberPage'));
const CorporateMemberPage   = lazy(() => import('../pages/members/CorporateMemberPage'));
const ForeignMemberPage     = lazy(() => import('../pages/members/ForeignMemberPage'));
const HonoraryMemberPage    = lazy(() => import('../pages/members/HonoraryMemberPage'));
const UseClubMemberPage     = lazy(() => import('../pages/members/UseClubMemberPage'));
const AssociateMemberPage   = lazy(() => import('../pages/members/AssociateMemberPage'));
const DiplomateMemberPage   = lazy(() => import('../pages/members/DiplomateMemberPage'));


// ── Page fallback ────────────────────────────────────────────
const PageFallback = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <LoadingSpinner size="lg" label="Loading page…" />
  </div>
);

// ── Wrap lazy pages with Suspense ────────────────────────────
const withSuspense = (Component) => (
  <Suspense fallback={<PageFallback />}>
    <Component />
  </Suspense>
);

// ── Route definitions ────────────────────────────────────────
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: withSuspense(HomePage) },

      // About routes (dropdown handled in navbar; define routes explicitly)
      { path: 'about/history', element: withSuspense(HistoryPage) },
      { path: 'about/speech', element: withSuspense(PresidentSpeechPage) },
      { path: 'about/legacy', element: withSuspense(LegacyPage) },

      // EC Members routes (including Executive Committee)
      { path: 'membersList', element: withSuspense(MemberListPage) },
      { path: 'leadership', element: withSuspense(LeadershipPage) },
      { path: 'members/donor', element: withSuspense(DonorMemberPage) },
      { path: 'members/life', element: withSuspense(LifeMemberPage) },
      { path: 'members/permanent', element: withSuspense(PermanentMemberPage) },
      { path: 'members/corporate', element: withSuspense(CorporateMemberPage) },
      { path: 'members/foreign', element: withSuspense(ForeignMemberPage) },
      { path: 'members/honorary', element: withSuspense(HonoraryMemberPage) },
      { path: 'members/use-club', element: withSuspense(UseClubMemberPage) },
      { path: 'members/associate', element: withSuspense(AssociateMemberPage) },
      { path: 'members/diplomate', element: withSuspense(DiplomateMemberPage) },

      // Core feature pages
      { path: 'facilities', element: withSuspense(FacilitiesPage) },
      { path: 'menu', element: withSuspense(MenuPage) },
      { path: 'events', element: withSuspense(EventsPage) },
      { path: 'gallery', element: withSuspense(GalleryPage) },
      { path: 'video', element: withSuspense(VideoGalleryPage) },
      { path: 'notice', element: withSuspense(NoticePage) },
      { path: 'reservation', element: withSuspense(ReservationPage) },

      // 404
      { path: '*', element: withSuspense(NotFoundPage) },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;