function mauriceWins(mSnails, sSnails) {
	
   let macCount = 0;
   let steveCount = 0;

   const mSlow = mSnails[0];
   const mMedium = mSnails[1];
   const mFast = mSnails[2];

   const sSlow = sSnails[0];
   const sMedium = sSnails[1];
   const sFast = sSnails[2];

   (mSlow<sFast) ? steveCount++: macCount++;
   (mMedium> sSlow) ? macCount++: steveCount++;
   (mFast>sMedium) ? macCount++: steveCount;

   return macCount > steveCount;
}

const res = mauriceWins([6, 8, 9], [7, 12, 14]);

console.log(res);