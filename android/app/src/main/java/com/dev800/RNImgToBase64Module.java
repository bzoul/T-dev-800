
package com.dev800;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.net.Uri;
import android.provider.MediaStore;
import android.util.Base64;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class RNImgToBase64Module extends ReactContextBaseJavaModule {
    static int compress = 5;

    private final ReactApplicationContext reactContext;

    public RNImgToBase64Module(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNImgToBase64";
    }

    @ReactMethod
    public void getBase64String(String uri, Promise promise) {
        Bitmap image = null;
        Bitmap newImage = null;
        int moyRed = 0;
        int moyBlue = 0;
        int moyGreen = 0;
        int alpha=255;
        try {
            if (uri.contains("http")) {
                image = getBitmapFromURL(uri);
            } else {
                image = MediaStore.Images.Media.getBitmap(reactContext.getContentResolver(), Uri.parse(uri));

            }
            if (image == null) {
                promise.reject("Error", "Failed to decode Bitmap, uri: " + uri);
            } else {
                int bitmapWidth = image.getWidth()-1;
                int bitmapHeight = image.getHeight()-1;
                int bitmapNewWidth = 0;
                int bitmapNewHeight = 0;
                newImage = Bitmap.createBitmap(image.getWidth()/compress, image.getHeight()/compress, Bitmap.Config.ARGB_4444);
                for (int width = 0; width <= bitmapWidth; width+=compress) {
                    bitmapNewHeight=0;
                    for (int height = 0; height <= bitmapHeight; height+=compress) {
                        moyRed = Red(width, height, image, bitmapHeight, bitmapWidth);
                        moyGreen = Green(width, height, image, bitmapHeight, bitmapWidth);
                        moyBlue = Blue(width, height, image, bitmapHeight, bitmapWidth);
                        if (bitmapNewWidth < newImage.getWidth() && bitmapNewHeight < newImage.getHeight()) {
                            newImage.setPixel(bitmapNewWidth, bitmapNewHeight, Color.argb(alpha, moyRed, moyGreen, moyBlue));
                        }
                        bitmapNewHeight++;
                    }
                    bitmapNewWidth++;
                }
                promise.resolve(bitmapToPNG(newImage));
            }
        } catch (Error e) {
            promise.reject("Error", "Failed to decode Bitmap: " + e);
            e.printStackTrace();
        } catch (Exception e) {
            promise.reject("Error", "Exception: " + e);
            e.printStackTrace();
        }
    }


    public static int Red (int width, int height, Bitmap image, int maxHeight, int maxWidth){
        int divise = 1;
        int moy =0 ;
        for (int x=0; x<compress; x++) {
            for (int i=0; i<compress; i++) {
                if (height + i <= maxHeight && width + x <= maxWidth) {
                    moy += Color.red(image.getPixel(width + x, height + i));
                    divise++;
                }
            }
        }
        moy = moy/divise;
        return  moy;
    }

    public static int Green (int width, int height, Bitmap image, int maxHeight, int maxWidth){
        int divise = 1;
        int moy=0 ;
        for (int x=0; x<compress; x++) {
            for (int i = 0; i < compress; i++) {
                if (height + i <= maxHeight && width + x <= maxWidth) {
                    moy += Color.green(image.getPixel(width+x, height + i));
                    divise++;
                }
            }
        }
        moy = moy/divise;
        return  moy;
    }

    public static int Blue (int width, int height, Bitmap image, int maxHeight, int maxWidth){
        int divise = 1;
        int moy = 0;
        for (int x=0; x<compress; x++) {
            for (int i=0; i<compress; i++) {
                if (height + i <= maxHeight && width + x <= maxWidth) {
                    moy += Color.blue(image.getPixel(width + x, height + i));
                    divise++;
                }
            }
        }
        moy = moy/divise;
        return  moy;
    }


    public Bitmap getBitmapFromURL(String src) {
        try {
            URL url = new URL(src);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setDoInput(true);
            connection.connect();
            InputStream input = connection.getInputStream();
            Bitmap myBitmap = BitmapFactory.decodeStream(input);
            return myBitmap;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    private String bitmapToPNG(Bitmap bitmap) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
    bitmap.compress(Bitmap.CompressFormat.JPEG, 100, byteArrayOutputStream);
        byte[] byteArray = byteArrayOutputStream.toByteArray();
        return Base64.encodeToString(byteArray, Base64.DEFAULT);
    }
}

