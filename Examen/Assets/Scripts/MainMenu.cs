using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MainMenu : MonoBehaviour
{
    // Change scene whenever you press the "Start" button
    public void LoadGame()
    {
        SceneManager.LoadScene("1");
    }
}
