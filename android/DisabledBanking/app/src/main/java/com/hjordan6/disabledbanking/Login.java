package com.hjordan6.disabledbanking;

import android.media.MediaPlayer;
import android.speech.tts.TextToSpeech;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import org.w3c.dom.Text;

import java.util.Locale;

public class Login extends AppCompatActivity {
    Button fingerPrint;
    TextToSpeech tts;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        tts = new TextToSpeech(Login.this, new TextToSpeech.OnInitListener() {
            @Override
            public void onInit(int status) {
                if (status == TextToSpeech.SUCCESS) {
                    int result = tts.setLanguage(Locale.US);
                    if(result == TextToSpeech.LANG_MISSING_DATA ||
                            result == TextToSpeech.LANG_NOT_SUPPORTED){
                        System.out.println("Language not supported");
                    }
                    tts.speak("Please press the finger print button to login", TextToSpeech.QUEUE_FLUSH, null);
                } else {
                    System.out.println("Error initializing");
                }
            }
        });

        fingerPrint = findViewById(R.id.finger_print_button);
        fingerPrint.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                tts.speak("Button pressed", TextToSpeech.QUEUE_FLUSH, null);
            }
        });
    }
}
