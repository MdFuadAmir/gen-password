import PasswordGenerator from "./PasswordGenerator/PasswordGenerator";

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden pt-8 relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/XkvKMTn7/hacker-doing-online-activism-wearing-anonymous-masks-filming-video.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-red-400 to-red-700 opacity-15" />
        <p className="text-green-600 opacity-50 font-mono">
          P a s s w o r d G e n e r a t o r D e s c r i p t i o n A p a s s w o
          r d g e n e r a t o r i s a s e c u r e t o o l t h a t h e l p s u s
          e r s c r e a t e s t r o n g a n d r a n d o m p a s s w o r d s f o
          r o n l i n e a c c o u n t s . I n t o d a y ’ s d i g i t a l w o r
          l d , s e c u r i t y i s e x t r e m e l y i m p o r t a n t . W e a
          k p a s s w o r d s c a n e a s i l y b e g u e s s e d o r h a c k e
          d , w h i c h p u t s p e r s o n a l i n f o r m a t i o n a t r i s
          k . A r a n d o m p a s s w o r d g e n e r a t o r s o l v e s t h i
          s p r o b l e m b y p r o d u c i n g c o m p l e x p a s s w o r d s
          u s i n g u p p e r c a s e l e t t e r s , l o w e r c a s e l e t t
          e r s , n u m b e r s , a n d s p e c i a l s y m b o l s . T h i s m
          a k e s t h e p a s s w o r d m u c h h a r d e r t o c r a c k u s i
          n g b r u t e f o r c e o r d i c t i o n a r y a t t a c k s . A m o
          d e r n p a s s w o r d g e n e r a t o r a l l o w s u s e r s t o c
          u s t o m i z e t h e i r p a s s w o r d l e n g t h a n d c h o o s
          e w h e t h e r t h e y w a n t t o i n c l u d e s y m b o l s , n u
          m b e r s , o r c a p i t a l l e t t e r s . T h i s f l e x i b i l
          i t y h e l p s u s e r s g e n e r a t e p a s s w o r d s t h a t m
          e e t d i f f e r e n t s e c u r i t y r e q u i r e m e n t s . U s
          i n g a p a s s w o r d g e n e r a t o r i s o n e o f t h e b e s t
          w a y s t o p r o t e c t y o u r o n l i n e i d e n t i t y a n d k
          e e p y o u r d a t a s a f e . P a s s w o r d G e n e r a t o r D e
          s c r i p t i o n A p a s s w o r d g e n e r a t o r i s a s e c u r
          e t o o l t h a t h e l p s u s e r s c r e a t e s t r o n g a n d r
          a n d o m p a s s w o r d s f o r o n l i n e a c c o u n t s . I n t
          o d a y ’ s d i g i t a l w o r l d , s e c u r i t y i s e x t r e m
          e l y i m p o r t a n t . W e a k p a s s w o r d s c a n e a s i l y
          b e g u e s s e d o r h a c k e d , w h i c h p u t s p e r s o n a l
          i n f o r m a t i o n a t r i s k . A r a n d o m p a s s w o r d g e
          n e r a t o r s o l v e s t h i s p r o b l e m b y p r o d u c i n g
          c o m p l e x p a s s w o r d s u s i n g u p p e r c a s e l e t t e
          r s , l o w e r c a s e l e t t e r s , n u m b e r s , a n d s p e c
          i a l s y m b o l s . T h i s m a k e s t h e p a s s w o r d m u c h
          h a r d e r t o c r a c k u s i n g b r u t e f o r c e o r d i c t i
          o n a r y a t t a c k s . A m o d e r n p a s s w o r d g e n e r a t
          o r a l l o w s u s e r s t o c u s t o m i z e t h e i r p a s s w o
          r d l e n g t h a n d c h o o s e w h e t h e r t h e y w a n t t o i
          n c l u d e s y m b o l s , n u m b e r s , o r c a p i t a l l e t t
          e r s . T h i s f l e x i b i l i t y h e l p s u s e r s g e n e r a
          t e p a s s w o r d s t h a t m e e t d i f f e r e n t s e c u r i t
          y r e q u i r e m e n t s . U s i n g a p a s s w o r d g e n e r a t
          o r i s o n e o f t h e b e s t w a y s t o p r o t e c t y o u r o n
          l i n e i d e n t i t y a n d k e e p y o u r d a t a s a f e . P a s
          s w o r d G e n e r a t o r D e s c r i p t i o n A p a s s w o r d g
          e n e r a t o r i s a s e c u r e t o o l t h a t h e l p s u s e r s
          c r e a t e s t r o n g a n d r a n d o m p a s s w o r d s f o r o n
          l i n e a c c o u n t s . I n t o d a y ’ s d i g i t a l w o r l d ,
          s e c u r i t y i s e x t r e m e l y i m p o r t a n t . W e a k p a
          s s w o r d s c a n e a s i l y b e g u e s s e d o r h a c k e d , w
          h i c h p u t s p e r s o n a l i n f o r m a t i o n a t r i s k . A
          r a n d o m p a s s w o r d g e n e r a t o r s o l v e s t h i s p r
          o b l e m b y p r o d u c i n g c o m p l e x p a s s w o r d s u s i
          n g u p p e r c a s e l e t t e r s , l o w e r c a s e l e t t e r s
          , n u m b e r s , a n d s p e c i a l s y m b o l s . T h i s m a k e
          s t h e p a s s w o r d m u c h h a r d e r t o c r a c k u s i n g b
          r u t e f o r c e o r d i c t i o n a r y a t t a c k s . A m o d e r
          n p a s s w o r d g e n e r a t o r a l l o w s u s e r s t o c u s t
          o m i z e t h e i r p a s s w o r d l e n g t h a n d c h o o s e w h
          e t h e r t h e y w a n t t o i n c l u d e s y m b o l s , n u m b e
          r s , o r c a p i t a l l e t t e r s . T h i s f l e x i b i l i t y
          h e l p s u s e r s g e n e r a t e p a s s w o r d s t h a t m e e t
          d i f f e r e n t s e c u r i t y r e q u i r e m e n t s . U s i n g
          a p a s s w o r d g e n e r a t o r i s o n e o f t h e b e s t w a y
          s t o p r o t e c t y o u r o n l i n e i d e n t i t y a n d k e e p
          y o u r d a t a s a f e . P a s s w o r d G e n e r a t o r D e s c r
          i p t i o n A p a s s w o r d g e n e r a t o r i s a s e c u r e t o
          o l t h a t h e l p s u s e r s c r e a t e s t r o n g a n d r a n d
          o m p a s s w o r d s f o r o n l i n e a c c o u n t s . I n t o d a
          y ’ s d i g i t a l w o r l d , s e c u r i t y i s e x t r e m e l y
          i m p o r t a n t . W e a k p a s s w o r d s c a n e a s i l y b e g
          u e s s e d o r h a c k e d , w h i c h p u t s p e r s o n a l i n f
          o r m a t i o n a t r i s k . A r a n d o m p a s s w o r d g e n e r
          a t o r s o l v e s t h i s p r o b l e m b y p r o d u c i n g c o m
          p l e x p a s s w o r d s u s i n g u p p e r c a s e l e t t e r s ,
          l o w e r c a s e l e t t e r s , n u m b e r s , a n d s p e c i a l
          s y m b o l s . T h i s m a k e s t h e p a s s w o r d m u c h h a r
          d e r t o c r a c k u s i n g b r u t e f o r c e o r d i c t i o n a
          r y a t t a c k s . A m o d e r n p a s s w o r d g e n e r a t o r a
          l l o w s u s e r s t o c u s t o m i z e t h e i r p a s s w o r d l
          e n g t h a n d c h o o s e w h e t h e r t h e y w a n t t o i n c l
          u d e s y m b o l s , n u m b e r s , o r c a p i t a l l e t t e r s
          . T h i s f l e x i b i l i t y h e l p s u s e r s g e n e r a t e p
          a s s w o r d s t h a t m e e t d i f f e r e n t s e c u r i t y r e
          q u i r e m e n t s . U s i n g a p a s s w o r d g e n e r a t o r i
          s o n e o f t h e b e s t w a y s t o p r o t e c t y o u r o n l i n
          e i d e n t i t y a n d k e e p y o u r d a t a s a f e . P a s s w o
          r d G e n e r a t o r D e s c r i p t i o n A p a s s w o r d g e n e
          r a t o r i s a s e c u r e t o o l t h a t h e l p s u s e r s c r e
          a t e s t r o n g a n d r a n d o m p a s s w o r d s f o r o n l i n
          e a c c o u n t s . I n t o d a y ’ s d i g i t a l w o r l d , s e c
          u r i t y i s e x t r e m e l y i m p o r t a n t . W e a k p a s s w
          o r d s c a n e a s i l y b e g u e s s e d o r h a c k e d , w h i c
          h p u t s p e r s o n a l i n f o r m a t i o n a t r i s k . A r a n
          d o m p a s s w o r d g e n e r a t o r s o l v e s t h i s p r o b l
          e m b y p r o d u c i n g c o m p l e x p a s s w o r d s u s i n g u
          p p e r c a s e l e t t e r s , l o w e r c a s e l e t t e r s , n u
          m b e r s , a n d s p e c i a l s y m b o l s . T h i s m a k e s t h
          e p a s s w o r d m u c h h a r d e r t o c r a c k u s i n g b r u t
          e f o r c e o r d i c t i o n a r y a t t a c k s . A m o d e r n p a
          s s w o r d g e n e r a t o r a l l o w s u s e r s t o c u s t o m i
          z e t h e i r p a s s w o r d l e n g t h a n d c h o o s e w h e t h
          e r t h e y w a n t t o i n c l u d e s y m b o l s , n u m b e r s ,
          o r c a p i t a l l e t t e r s . T h i s f l e x i b i l i t y h e l
          p s u s e r s g e n e r a t e p a s s w o r d s t h a t m e e t d i f
          f e r e n t s e c u r i t y r e q u i r e m e n t s . U s i n g a p a
          s s w o r d g e n e r a t o r i s o n e o f t h e b e s t w a y s t o
          p r o t e c t y o u r o n l i n e i d e n t i t y a n d k e e p y o u
          r d a t a s a f e . P a s s w o r d G e n e r a t o r D e s c r i p t
          i o n A p a s s w o r d g e n e r a t o r i s a s e c u r e t o o l t
          h a t h e l p s u s e r s c r e a t e s t r o n g a n d r a n d o m p
          a s s w o r d s f o r o n l i n e a c c o u n t s . I n t o d a y ’ s
          d i g i t a l w o r l d , s e c u r i t y i s e x t r e m e l y i m p
          o r t a n t . W e a k p a s s w o r d s c a n e a s i l y b e g u e s
          s e d o r h a c k e d , w h i c h p u t s p e r s o n a l i n f o r m
          a t i o n a t r i s k . A r a n d o m p a s s w o r d g e n e r a t o
          r s o l v e s t h i s p r o b l e m b y p r o d u c i n g c o m p l e
          x p a s s w o r d s u s i n g u p p e r c a s e l e t t e r s , l o w
          e r c a s e l e t t e r s , n u m b e r s , a n d s p e c i a l s y m
          b o l s . T h i s m a k e s t h e p a s s w o r d m u c h h a r d e r
          t o c r a c k u s i n g b r u t e f o r c e o r d i c t i o n a r y a
          t t a c k s . A m o d e r n p a s s w o r d g e n e r a t o r a l l o
          w s u s e r s t o c u s t o m i z e t h e i r p a s s w o r d l e n g
          t h a n d c h o o s e w h e t h e r t h e y w a n t t o i n c l u d e
          s y m b o l s , n u m b e r s , o r c a p i t a l l e t t e r s . T h
          i s f l e x i b i l i t y h e l p s u s e r s g e n e r a t e p a s s
          w o r d s t h a t m e e t d i f f e r e n t s e c u r i t y r e q u i
          r e m e n t s . U s i n g a p a s s w o r d g e n e r a t o r i s o n
          e o f t h e b e s t w a y s t o p r o t e c t y o u r o n l i n e i d
          e n t i t y a n d k e e p y o u r d a t a s a f e . P a s s w o r d G
          e n e r a t o r D e s c r i p t i o n A p a s s w o r d g e n e r a t
          o r i s a s e c u r e t o o l t h a t h e l p s u s e r s c r e a t e
          s t r o n g a n d r a n d o m p a s s w o r d s f o r o n l i n e a c
          c o u n t s . I n t o d a y ’ s d i g i t a l w o r l d , s e c u r i
          t y i s e x t r e m e l y i m p o r t a n t . W e a k p a s s w o r d
          s c a n e a s i l y b e g u e s s e d o r h a c k e d , w h i c h p u
          t s p e r s o n a l i n f o r m a t i o n a t r i s k . A r a n d o m
          p a s s w o r d g e n e r a t o r s o l v e s t h i s p r o b l e m b
          y p r o d u c i n g c o m p l e x p a s s w o r d s u s i n g u p p e
          r c a s e l e t t e r s , l o w e r c a s e l e t t e r s , n u m b e
          r s , a n d s p e c i a l s y m b o l s . T h i s m a k e s t h e p a
          s s w o r d m u c h h a r d e r t o c r a c k u s i n g b r u t e f o
          r c e o r d i c t i o n a r y a t t a c k s . A m o d e r n p a s s w
          o r d g e n e r a t o r a l l o w s u s e r s t o c u s t o m i z e t
          h e i r p a s s w o r d l e n g t h a n d c h o o s e w h e t h e r t
          h e y w a n t t o i n c l u d e s y m b o l s , n u m b e r s , o r c
          a p i t a l l e t t e r s . T h i s f l e x i b i l i t y h e l p s u
          s e r s g e n e r a t e p a s s w o r d s t h a t m e e t d i f f e r
          e n t s e c u r i t y r e q u i r e m e n t s . U s i n g a p a s s w
          o r d g e n e r a t o r i s o n e o f t h e b e s t w a y s t o p r o
          t e c t y o u r o n l i n e i d e n t i t y a n d k e e p y o u r d a
          t a s a f e .
        </p>
      </div>
      <div className="relative pb-8 px-4">
        <PasswordGenerator />
      </div>
      <div className="relative">
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p className="text-white text-center">
              Copyright © {new Date().getFullYear()} - Md Fuad Amir All right reserved
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default App;
