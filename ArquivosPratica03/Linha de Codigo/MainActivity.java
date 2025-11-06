package net.hanshq.hello;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends Activity {

    private EditText editNome;
    private Button btnConverter;
    private TextView txtResultado;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editNome = findViewById(R.id.editNome);
        btnConverter = findViewById(R.id.btnConverter);
        txtResultado = findViewById(R.id.txtResultado);

        btnConverter.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String nome = editNome.getText().toString().trim();

                if (nome.isEmpty()) {
                    txtResultado.setText("Por favor, digite um nome.");
                    return;
                }

                // Converte o nome em ASCII
                StringBuilder ascii = new StringBuilder();
                for (char c : nome.toCharArray()) {
                    ascii.append((int) c).append(" ");
                }

                txtResultado.setText("ASCII: " + ascii.toString().trim());
            }
        });
    }
}
