export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      meal_menu: {
        Row: {
          created_at: string | null
          id: number
          main: string | null
          serve_at: string
          sub: string | null
          type: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          main?: string | null
          serve_at: string
          sub?: string | null
          type?: string
        }
        Update: {
          created_at?: string | null
          id?: number
          main?: string | null
          serve_at?: string
          sub?: string | null
          type?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
