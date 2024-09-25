package com.example.safeareaplugin

import android.os.Build
import android.view.WindowInsets
import androidx.annotation.RequiresApi
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.annotation.CapacitorPlugin

@CapacitorPlugin(name = "SafeAreaPlugin")
class SafeAreaPlugin : Plugin() {

    @RequiresApi(Build.VERSION_CODES.R)
    @PluginMethod
    fun getSafeAreaInsets(call: PluginCall) {
        activity?.window?.decorView?.rootWindowInsets?.let { windowInsets ->
            val insets = windowInsets.getInsets(WindowInsets.Type.systemBars())

            call.resolve(
                JSObject().apply {
                    put("top", insets.top)
                    put("left", insets.left)
                    put("bottom", insets.bottom)
                    put("right", insets.right)
                }
            )
        } ?: run {
            call.reject("WindowInsets not available")
        }
    }
}
